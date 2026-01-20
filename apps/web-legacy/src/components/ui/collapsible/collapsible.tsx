import { Collapsible as ArkCollapsible } from '@ark-ui/solid/collapsible';

import * as styles from './collapsible.css';

export const CollapsibleRoot = (props: ArkCollapsible.RootProps) => (
  <ArkCollapsible.Root class={styles.collapsibleRoot} {...props} />
);

export const CollapsibleTrigger = (props: ArkCollapsible.TriggerProps) => (
  <ArkCollapsible.Trigger class={styles.collapsibleTrigger} {...props} />
);

export const CollapsibleContent = (props: ArkCollapsible.ContentProps) => (
  <ArkCollapsible.Content class={styles.collapsibleContent} {...props}>
    <div class={styles.collapsibleContentInner}>{props.children}</div>
  </ArkCollapsible.Content>
);
