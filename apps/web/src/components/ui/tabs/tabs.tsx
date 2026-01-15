import { Tabs as ArkTabs } from '@ark-ui/solid/tabs';

import * as styles from './tabs.css';

export const TabsRoot = (props: ArkTabs.RootProps) => (
  <ArkTabs.Root class={styles.tabsRoot} {...props} />
);

export const TabsList = (props: ArkTabs.ListProps) => (
  <ArkTabs.List class={styles.tabsList} {...props} />
);

export const TabsTrigger = (props: ArkTabs.TriggerProps) => (
  <ArkTabs.Trigger class={styles.tabsTrigger} {...props} />
);

export const TabsContent = (props: ArkTabs.ContentProps) => (
  <ArkTabs.Content class={styles.tabsContent} {...props} />
);

export const TabsIndicator = (props: ArkTabs.IndicatorProps) => (
  <ArkTabs.Indicator class={styles.tabsIndicator} {...props} />
);
