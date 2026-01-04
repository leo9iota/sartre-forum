import { splitProps } from 'solid-js';
import type { ParentProps } from 'solid-js';

import * as KobalteSwitch from '@kobalte/core/switch';

import * as styles from './switch.css';

export interface SwitchProps extends Omit<KobalteSwitch.SwitchRootProps, 'children'>, ParentProps {
  size?: 'sm' | 'md' | 'lg'; // Kept for API compatibility, though currently unused in CSS
  class?: string;
}

export const Switch = (props: SwitchProps) => {
  const [local, rest] = splitProps(props, ['class', 'size', 'children']);

  return (
    <KobalteSwitch.Root class={`${styles.switchRoot} ${local.class ?? ''}`} {...rest}>
      <KobalteSwitch.Input class={styles.switchInput} />
      <KobalteSwitch.Control class={styles.switchControl}>
        <KobalteSwitch.Thumb class={styles.switchThumb} />
      </KobalteSwitch.Control>
      {local.children && (
        <KobalteSwitch.Label class={styles.switchLabel}>{local.children}</KobalteSwitch.Label>
      )}
    </KobalteSwitch.Root>
  );
};
