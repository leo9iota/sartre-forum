import { createSignal, splitProps } from 'solid-js';
import type { ParentProps } from 'solid-js';

import { Switch as ArkSwitch } from '@ark-ui/solid/switch';

import { visuallyHidden } from '../../../styles/utils.css';
import * as styles from './switch.css';

export interface SwitchProps extends Omit<ArkSwitch.RootProps, 'children'>, ParentProps {
  size?: 'sm' | 'md' | 'lg'; // Kept for API compatibility
  class?: string;
}

/**
 * Generic Switch component for boolean toggles.
 */
export const Switch = (props: SwitchProps) => {
  const [local, rest] = splitProps(props, ['class', 'size', 'children']);
  const [isPressed, setIsPressed] = createSignal(false);

  return (
    <ArkSwitch.Root
      class={`${styles.switchRoot} ${local.class ?? ''}`}
      {...rest}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerLeave={() => setIsPressed(false)}
      data-pressed={isPressed() ? '' : undefined}
    >
      <ArkSwitch.HiddenInput class={styles.switchInput} />
      <ArkSwitch.Control class={styles.switchControl}>
        <ArkSwitch.Thumb class={styles.switchThumb} />
      </ArkSwitch.Control>
      {local.children ? (
        <ArkSwitch.Label class={styles.switchLabel}>{local.children}</ArkSwitch.Label>
      ) : (
        <ArkSwitch.Label style={visuallyHidden}>Toggle</ArkSwitch.Label>
      )}
      {/* Accessible label provided */}
    </ArkSwitch.Root>
  );
};
