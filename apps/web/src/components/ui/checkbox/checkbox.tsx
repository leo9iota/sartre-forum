import { Show, splitProps } from 'solid-js';
import type { ParentProps } from 'solid-js';

import { Checkbox as ArkCheckbox } from '@ark-ui/solid/checkbox';
import { Check, Minus } from 'lucide-solid';

import * as styles from './checkbox.css';

export interface CheckboxProps extends Omit<ArkCheckbox.RootProps, 'children'>, ParentProps {
  label?: string;
  class?: string;
}

/**
 * Checkbox component for boolean or indeterminate selection.
 */
export const Checkbox = (props: CheckboxProps) => {
  const [local, rest] = splitProps(props, ['label', 'class', 'children']);

  return (
    <ArkCheckbox.Root class={`${styles.checkboxRoot} ${local.class ?? ''}`} {...rest}>
      <ArkCheckbox.Control class={styles.checkboxControl}>
        <ArkCheckbox.Indicator class={styles.checkboxIndicator}>
          <Check />
        </ArkCheckbox.Indicator>
        <ArkCheckbox.Indicator class={styles.checkboxIndicator} indeterminate>
          <Minus />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <Show when={local.label || local.children}>
        <ArkCheckbox.Label class={styles.checkboxLabel}>
          {local.label ?? local.children}
        </ArkCheckbox.Label>
      </Show>
      <ArkCheckbox.HiddenInput class={styles.checkboxHiddenInput} />
    </ArkCheckbox.Root>
  );
};
