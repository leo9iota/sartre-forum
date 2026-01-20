import { createSignal, onMount, splitProps } from 'solid-js';
import type { ParentProps } from 'solid-js';

import { Switch as ArkSwitch } from '@ark-ui/solid/switch';
import { Moon, Sun } from 'lucide-solid';

import * as styles from './theme-switch.css';

export interface ThemeSwitchProps
  extends Omit<ArkSwitch.RootProps, 'children' | 'checked' | 'onCheckedChange'>, ParentProps {
  class?: string;
  /**
   * Show label with sun/moon emoji
   * @default true
   */
  showLabel?: boolean;
}

/**
 * Theme switch component for toggling between light and dark modes.
 * Handles theme logic client-side via localStorage and document classList.
 */
export const ThemeSwitch = (props: ThemeSwitchProps) => {
  const [local, rest] = splitProps(props, ['class', 'children', 'showLabel']);
  const [isPressed, setIsPressed] = createSignal(false);
  const [isDark, setIsDark] = createSignal(false);

  // Initialize state from existing DOM/localStorage
  onMount(() => {
    // Check if dark mode is already active (set by inline script)
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(hasDarkClass);
  });

  const toggleTheme = (details: { checked: boolean }) => {
    const newIsDark = details.checked;
    setIsDark(newIsDark);

    // Update DOM
    document.documentElement.classList.toggle('dark', newIsDark);
    document.documentElement.dataset.theme = newIsDark ? 'dark' : 'light';

    // Persist
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <ArkSwitch.Root
      class={`${styles.switchRoot} ${local.class ?? ''}`}
      {...rest}
      checked={isDark()}
      onCheckedChange={toggleTheme}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerLeave={() => setIsPressed(false)}
      data-pressed={isPressed() ? '' : undefined}
    >
      <ArkSwitch.HiddenInput class={styles.switchInput} />
      <ArkSwitch.Control class={styles.switchControl}>
        <ArkSwitch.Thumb class={styles.switchThumb}>
          <Sun class={`${styles.switchIcon} sun`} />
          <Moon class={`${styles.switchIcon} moon`} />
        </ArkSwitch.Thumb>
      </ArkSwitch.Control>
      {local.children && (
        <ArkSwitch.Label class={styles.switchLabel}>{local.children}</ArkSwitch.Label>
      )}
    </ArkSwitch.Root>
  );
};
