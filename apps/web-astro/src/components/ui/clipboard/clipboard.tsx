import { Show, splitProps } from 'solid-js';
import type { ParentProps } from 'solid-js';

import { Clipboard as ArkClipboard } from '@ark-ui/solid/clipboard';
import { Check, ClipboardCopy } from 'lucide-solid';

import * as styles from './clipboard.css';

export interface ClipboardProps extends Omit<ArkClipboard.RootProps, 'children'>, ParentProps {
  label?: string;
  class?: string;
}

/**
 * Clipboard component to copy text to clipboard.
 */
export const Clipboard = (props: ClipboardProps) => {
  const [local, rest] = splitProps(props, ['label', 'class']);

  return (
    <ArkClipboard.Root class={`${styles.clipboardRoot} ${local.class ?? ''}`} {...rest}>
      <Show when={local.label}>
        <ArkClipboard.Label class={styles.clipboardLabel}>{local.label}</ArkClipboard.Label>
      </Show>
      <ArkClipboard.Control class={styles.clipboardControl}>
        <ArkClipboard.Input class={styles.clipboardInput} />
        <ArkClipboard.Trigger class={styles.clipboardTrigger}>
          <ArkClipboard.Indicator class={styles.clipboardIndicator} copied={<Check />}>
            <ClipboardCopy />
          </ArkClipboard.Indicator>
        </ArkClipboard.Trigger>
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  );
};
