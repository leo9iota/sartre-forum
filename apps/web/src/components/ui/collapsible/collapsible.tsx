import { splitProps } from 'solid-js';
import type { JSX, ParentProps } from 'solid-js';

import { Collapsible as ArkCollapsible } from '@ark-ui/solid/collapsible';
import { ChevronRight } from 'lucide-solid';

import * as styles from './collapsible.css';

export interface CollapsibleProps extends Omit<ArkCollapsible.RootProps, 'children'>, ParentProps {
  /** The trigger/header content */
  trigger: JSX.Element;
  /** Optional custom icon for the indicator (defaults to ChevronRight) */
  icon?: JSX.Element;
  class?: string;
}

/**
 * Collapsible component for expandable/collapsible content sections.
 */
export const Collapsible = (props: CollapsibleProps) => {
  const [local, rest] = splitProps(props, ['class', 'trigger', 'icon', 'children']);

  return (
    <ArkCollapsible.Root class={`${styles.collapsibleRoot} ${local.class ?? ''}`} {...rest}>
      <ArkCollapsible.Trigger class={styles.collapsibleTrigger}>
        {local.trigger}
        <ArkCollapsible.Indicator class={styles.collapsibleIndicator}>
          {local.icon ?? <ChevronRight />}
        </ArkCollapsible.Indicator>
      </ArkCollapsible.Trigger>
      <ArkCollapsible.Content class={styles.collapsibleContent}>
        <div class={styles.collapsibleContentInner}>{local.children}</div>
      </ArkCollapsible.Content>
    </ArkCollapsible.Root>
  );
};
