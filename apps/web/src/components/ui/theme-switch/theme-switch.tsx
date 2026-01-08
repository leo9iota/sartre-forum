import { createSignal, splitProps } from 'solid-js';
import type { ParentProps } from 'solid-js';

import { Switch as ArkSwitch } from '@ark-ui/solid/switch';

import { useTheme } from '../../../lib/theme/theme-context';
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
 * Uses the ThemeProvider context for state management.
 */
export const ThemeSwitch = (props: ThemeSwitchProps) => {
  const [local, rest] = splitProps(props, ['class', 'children', 'showLabel']);
  const [isPressed, setIsPressed] = createSignal(false);
  const { theme, toggleTheme } = useTheme();

  const showLabel = () => local.showLabel !== false;

  return (
    <ArkSwitch.Root
      class={`${styles.switchRoot} ${local.class ?? ''}`}
      {...rest}
      checked={theme() === 'dark'}
      onCheckedChange={() => toggleTheme()}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerLeave={() => setIsPressed(false)}
      data-pressed={isPressed() ? '' : undefined}
    >
      <ArkSwitch.HiddenInput class={styles.switchInput} />
      <ArkSwitch.Control class={styles.switchControl}>
        <ArkSwitch.Thumb class={styles.switchThumb} />
      </ArkSwitch.Control>
      {showLabel() && (
        <ArkSwitch.Label class={styles.switchLabel}>
          {theme() === 'dark' ? '🌙' : '☀️'}
        </ArkSwitch.Label>
      )}
      {local.children && (
        <ArkSwitch.Label class={styles.switchLabel}>{local.children}</ArkSwitch.Label>
      )}
    </ArkSwitch.Root>
  );
};
