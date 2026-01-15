# Component Architecture

Core component architecture philosophy for the project. The UI library is built upon **Ark UI** (Headless Primitives) and **Vanilla Extract** (CSS-in-JS).

We employ two distinct architectural patterns depending on the complexity and flexibility requirements of the component: **Container Components** and **Leaf Components**.

---

## Container Component Architecture

**Pattern:** Primitive / Composition ("The Lego Blocks")

Container components are structural elements that typically hold arbitrary content, manage complex state, or require flexible layouts. Examples include **Tabs**, **Dialog**, **Accordion**, **Popover**, and **HoverCard**.

For these components, we avoid creating a monolithic "Config Object" API. Instead, we export the individual sub-components (Primitives) directly. This pushes the layout responsibility to the consumer, granting maximum flexibility.

### Implementation Guide

1.  **Wrap Ark UI Primitives**: Create a thin wrapper around each Ark UI part.
2.  **Apply Styles**: Attach the Vanilla Extract class to the wrapper.
3.  **Export Individually**: Export `*Root`, `*Trigger`, `*Content`, etc.

#### Example: Tabs Implementation

```tsx
// src/components/ui/tabs/tabs.tsx
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
```

### Usage Pattern

The consumer is responsible for assembling the parts. This allows for variations (e.g., placing the Tab List on the side, adding extra buttons to the header, or interleaving content) without modifying the component itself.

```tsx
import { TabsRoot, TabsList, TabsTrigger, TabsContent, TabsIndicator } from '@/components/ui/tabs';

<TabsRoot defaultValue="account">
    <div class="my-custom-layout-wrapper">
        <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsIndicator />
        </TabsList>
    </div>

    <TabsContent value="account">...</TabsContent>
    <TabsContent value="settings">...</TabsContent>
</TabsRoot>;
```

### Why Primitive Pattern?

- **Layout Independence**: The component doesn't dictate where the title goes vs the content.
- **Cleaner API**: Avoids prop drilling. Props meant for the Trigger go directly on the Trigger.
- **HTML Clarity**: The JSX verifies the DOM structure 1:1.

---

## Leaf Component Architecture

**Pattern:** Monolithic / Encapsulated ("The Plug & Play")

Leaf components are "atomic" UI elements that have a rigid internal structure and are typically used as inputs or simple visual indicators. Examples include **Switch**, **Checkbox**, **Avatar**, **Badge**, and **Button**.

For these components, we prefer a single export that handles the internal wiring. Consumers shouldn't need to manually assemble a toggle switch every time they use it.

### Implementation Guide

1.  **Internal Assembly**: Import all Ark UI parts inside the component file.
2.  **Single Export**: Create one main component (e.g., `Switch`).
3.  **RestProps**: Pass flexible props (like `class` or event handlers) to the Root element.

#### Example: Switch Implementation

```tsx
// src/components/ui/switch/switch.tsx
import { Switch as ArkSwitch } from '@ark-ui/solid/switch';
import * as styles from './switch.css';

export const Switch = (props: SwitchProps) => {
    const [local, rest] = splitProps(props, ['children', 'class']);

    return (
        <ArkSwitch.Root class={styles.switchRoot} {...rest}>
            <ArkSwitch.HiddenInput class={styles.switchInput} />
            <ArkSwitch.Control class={styles.switchControl}>
                <ArkSwitch.Thumb class={styles.switchThumb} />
            </ArkSwitch.Control>
            {local.children && (
                <ArkSwitch.Label class={styles.switchLabel}>{local.children}</ArkSwitch.Label>
            )}
        </ArkSwitch.Root>
    );
};
```

### Usage Pattern

Usage is concise and consistent. There is only one way to render a Switch.

```tsx
import { Switch } from '@/components/ui/switch';

<Switch checked={isChecked()} onCheckedChange={setChecked}>
    Enable Notifications
</Switch>;
```

### Why Monolithic Pattern?

- **Velocity**: Drop in and go.
- **Consistency**: Every Switch looks identical; hard to "break" the design system.
- **Reduced Boilerplate**: No need to write 5 lines of JSX for a simple checkbox.

---

## Summary Decision Matrix

| Feature         | Container Pattern (Primitives) | Leaf Pattern (Monolithic)       |
| :-------------- | :----------------------------- | :------------------------------ |
| **Complexity**  | High (Layout & State)          | Low (Atomic)                    |
| **Content**     | Arbitrary Children (Slots)     | Structured / Text Only          |
| **Flexibility** | High (Consumer controlled)     | Low (Strict Design)             |
| **Examples**    | Tabs, Dialog, Menu, HoverCard  | Button, Switch, Checkbox, Input |
