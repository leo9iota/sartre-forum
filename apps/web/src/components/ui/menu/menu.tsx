import { For, Show, splitProps } from 'solid-js';
import type { JSX } from 'solid-js';

import { Menu as ArkMenu } from '@ark-ui/solid/menu';
import { ChevronRight } from 'lucide-solid';

import * as styles from './menu.css';

export interface MenuItemData {
  id: string;
  type?: 'item' | 'separator' | 'trigger' | 'group' | 'label' | 'checkbox' | 'radio'; // Extended types
  label?: JSX.Element;
  value?: string;
  disabled?: boolean;
  checked?: boolean; // For checkbox/radio (controlled usually needs more logic, but basic support here)
  children?: MenuItemData[]; // For submenus or groups
  onSelect?: (id: string) => void;
}

export interface MenuProps extends ArkMenu.RootProps {
  trigger: JSX.Element;
  items: MenuItemData[];
  class?: string;
}

const MenuRenderer = (props: { items: MenuItemData[] }) => {
  return (
    <For each={props.items}>
      {item => {
        // Separator
        if (item.type === 'separator') {
          return <ArkMenu.Separator class={styles.separator} />;
        }

        // Label (Group Label)
        if (item.type === 'label') {
          return <ArkMenu.ItemGroupLabel class={styles.label}>{item.label}</ArkMenu.ItemGroupLabel>;
        }

        // Group
        if (item.type === 'group') {
          return (
            <ArkMenu.ItemGroup class={styles.itemGroup}>
              <Show when={item.label}>
                <ArkMenu.ItemGroupLabel class={styles.label}>{item.label}</ArkMenu.ItemGroupLabel>
              </Show>
              <MenuRenderer items={item.children ?? []} />
            </ArkMenu.ItemGroup>
          );
        }

        // Submenu (Trigger)
        if (item.children && item.children.length > 0) {
          return (
            <ArkMenu.Root positioning={{ placement: 'right-start', gutter: 4 }}>
              <ArkMenu.TriggerItem class={styles.triggerItem}>
                {item.label}
                <ChevronRight style={{ 'margin-left': 'auto', width: '1rem', height: '1rem' }} />
              </ArkMenu.TriggerItem>
              <ArkMenu.Positioner>
                <ArkMenu.Content class={styles.content}>
                  <MenuRenderer items={item.children} />
                </ArkMenu.Content>
              </ArkMenu.Positioner>
            </ArkMenu.Root>
          );
        }

        // Standard Item
        return (
          <ArkMenu.Item
            class={styles.item}
            value={item.id}
            disabled={item.disabled}
            onSelect={() => item.onSelect?.(item.id)}
          >
            {item.label}
          </ArkMenu.Item>
        );
      }}
    </For>
  );
};

export const Menu = (props: MenuProps) => {
  const [local, rest] = splitProps(props, ['trigger', 'items', 'class']);

  return (
    <ArkMenu.Root {...rest}>
      <ArkMenu.Trigger
        class={
          `${local.class ?? ''}` /* Trigger styling is usually on the button itself, or we can add a wrapper style if needed */
        }
      >
        {local.trigger}
      </ArkMenu.Trigger>
      <ArkMenu.Positioner>
        <ArkMenu.Content class={styles.content}>
          <MenuRenderer items={local.items} />
        </ArkMenu.Content>
      </ArkMenu.Positioner>
    </ArkMenu.Root>
  );
};
