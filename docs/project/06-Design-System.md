# Design System

This project uses **Park UI**, a component library built on top of **Panda CSS** (styling) and **Ark UI** (headless components).

---

## Stack Overview

| Layer          | Technology | Purpose                                                    |
| -------------- | ---------- | ---------------------------------------------------------- |
| **Styling**    | Panda CSS  | CSS-in-JS with design tokens, recipes, and utility classes |
| **Components** | Ark UI     | Headless, accessible component primitives (no styling)     |
| **Preset**     | Park UI    | Pre-styled recipes combining Panda CSS + Ark UI            |

---

## How It Works

```
Park UI Preset (provides default styles)
        ↓
Your theme customizations (override defaults)
        ↓
Panda CSS generates → styled-system/
        ↓
Components use generated classes
```

---

## Project Structure

```
apps/web/
├── panda.config.ts          # Panda CSS configuration
├── styled-system/           # Generated CSS utilities (don't edit)
│   ├── css/                 # css() utility
│   ├── recipes/             # Component recipes
│   └── tokens/              # Design tokens
└── src/
    ├── app.css              # CSS layer imports
    ├── components/ui/       # Your UI components
    └── theme/
        ├── recipes/         # Custom/override recipes
        │   ├── index.ts     # Recipe registry
        │   ├── button.ts    # Custom button recipe
        │   └── ...
        ├── tokens/          # Custom tokens (colors, spacing, etc.)
        ├── keyframes.ts     # Custom animations
        └── global-css.ts    # Global styles
```

---

## Using Components

### Method 1: Park UI Components (Pre-built)

```tsx
import { Button } from '@/components/ui/button';

<Button variant="solid" size="md">
    Click me
</Button>;
```

### Method 2: Panda CSS Utilities

```tsx
import { css } from '@styled-system/css';

<div class={css({ display: 'flex', gap: '4', p: '4' })}>Content</div>;
```

### Method 3: Ark UI + Custom Styling

```tsx
import { Accordion } from '@ark-ui/solid';
import { css } from '@styled-system/css';

<Accordion.Root class={css({ bg: 'gray.1' })}>
    <Accordion.Item value="item-1">
        <Accordion.ItemTrigger>Toggle</Accordion.ItemTrigger>
        <Accordion.ItemContent>Content</Accordion.ItemContent>
    </Accordion.Item>
</Accordion.Root>;
```

---

## Customization Guide

### 1. Understanding Recipes

**Recipes** = Reusable component styles with variants.

| Type          | Use For                   | Example                   |
| ------------- | ------------------------- | ------------------------- |
| `recipes`     | Single-element components | Button, Badge, Input      |
| `slotRecipes` | Multi-part components     | Accordion, Dialog, Select |

### 2. The Recipe Registry (`src/theme/recipes/index.ts`)

This file tells Panda CSS which custom recipes to include:

```typescript
import { button } from './button';
import { spinner } from './spinner';
import { switchRecipe } from './switch';

// Single-element components
export const recipes = {
    button,
    spinner
};

// Multi-part components
export const slotRecipes = {
    switchRecipe
};
```

> **Important**: Only add recipes here if you're **customizing** or **creating new** components.
> Park UI preset already provides default recipes for most components.

### 3. Overriding a Park UI Component

To customize an existing Park UI component:

1. Find or create the recipe file (e.g., `src/theme/recipes/button.ts`)
2. Modify the styles
3. Export it in `index.ts`

```typescript
// src/theme/recipes/button.ts
import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
    className: 'button',
    base: {
        cursor: 'pointer',
        borderRadius: 'lg',
        fontWeight: 'semibold'
    },
    variants: {
        variant: {
            solid: { bg: 'accent.solid', color: 'white' },
            outline: { borderWidth: '1px', borderColor: 'border' }
        },
        size: {
            sm: { h: '8', px: '3', textStyle: 'sm' },
            md: { h: '10', px: '4', textStyle: 'md' },
            lg: { h: '12', px: '6', textStyle: 'lg' }
        }
    },
    defaultVariants: {
        variant: 'solid',
        size: 'md'
    }
});
```

### 4. Creating a New Component

1. Create the recipe file
2. Add to `index.ts`
3. Create the component in `src/components/ui/`

---

## Design Tokens

Tokens are defined in `panda.config.ts` under `theme.extend.tokens`:

```typescript
tokens: {
    colors: {
        brand: { value: '#6366f1' }
    },
    spacing: {
        xs: { value: '0.5rem' }
    }
}
```

Use in components:

```tsx
<div class={css({ bg: 'brand', p: 'xs' })} />
```

---

## Semantic Tokens

Semantic tokens adapt to light/dark mode:

```typescript
semanticTokens: {
    colors: {
        fg: {
            default: {
                value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' }
            },
            muted: {
                value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' }
            }
        }
    }
}
```

---

## Common Commands

| Command      | Description                                      |
| ------------ | ------------------------------------------------ |
| `bun ui:gen` | Regenerate `styled-system/` after config changes |
| `bun dev`    | Start dev server (auto-regenerates on changes)   |

---

## Workflow Summary

1. **Using existing components** → Just import from `@/components/ui/`
2. **Customizing a component** → Edit recipe in `src/theme/recipes/`, export in `index.ts`
3. **Adding new tokens** → Edit `panda.config.ts`, run `bun ui:gen`
4. **Inline styling** → Use `css()` utility from `@styled-system/css`

---

## Resources

- [Park UI Documentation](https://park-ui.com)
- [Panda CSS Documentation](https://panda-css.com)
- [Ark UI Documentation](https://ark-ui.com)
