import { Menu as ArkMenu } from '@ark-ui/solid/menu';

import * as styles from './menu.css';

export const MenuRoot = (props: ArkMenu.RootProps) => <ArkMenu.Root {...props} />;

export const MenuTrigger = (props: ArkMenu.TriggerProps) => (
  <ArkMenu.Trigger class={props.class} {...props} />
);

export const MenuContent = (props: ArkMenu.ContentProps) => (
  <ArkMenu.Content class={styles.content} {...props} />
);

export const MenuItem = (props: ArkMenu.ItemProps) => (
  <ArkMenu.Item class={styles.item} {...props} />
);

export const MenuTriggerItem = (props: ArkMenu.TriggerItemProps) => (
  <ArkMenu.TriggerItem class={styles.triggerItem} {...props} />
);

export const MenuPositioner = (props: ArkMenu.PositionerProps) => <ArkMenu.Positioner {...props} />;

export const MenuSeparator = (props: ArkMenu.SeparatorProps) => (
  <ArkMenu.Separator class={styles.separator} {...props} />
);

export const MenuItemGroup = (props: ArkMenu.ItemGroupProps) => (
  <ArkMenu.ItemGroup class={styles.itemGroup} {...props} />
);

export const MenuItemGroupLabel = (props: ArkMenu.ItemGroupLabelProps) => (
  <ArkMenu.ItemGroupLabel class={styles.label} {...props} />
);

export const MenuContext = ArkMenu.Context;
