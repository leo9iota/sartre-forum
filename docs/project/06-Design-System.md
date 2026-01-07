# Design System

## Philosophy: Refined Utilitarian

**Vibe**: Markdown/Paper feel — like reading a well-formatted technical specification or RFC document.

This design takes the structure of Hacker News (numbered lists, clear hierarchy) but upgrades it with refined typography and generous spacing. It says "I care about the specs."

### Core Principles

1. **Readability First** — Optimized for long-form technical content
2. **Clear Hierarchy** — Obvious structure through typography, not decoration
3. **Minimal Chrome** — No unnecessary visual flourishes
4. **Warm & Inviting** — Cream paper tones, not sterile whites

---

## Color Palette

### Light Theme — "Paper"

| Token             | Value     | Usage                       |
| ----------------- | --------- | --------------------------- |
| `background`      | `#F5F3EF` | Warm cream paper            |
| `backgroundAlt`   | `#EBE8E2` | Cards, elevated surfaces    |
| `foreground`      | `#1A1A1A` | Primary text (near-black)   |
| `foregroundMuted` | `#6B6B6B` | Metadata, secondary text    |
| `primary`         | `#2C2C2C` | Links, interactive elements |
| `accent`          | `#8B4513` | Warm brown highlights       |
| `border`          | `#D4D0C8` | Subtle dividers             |

### Dark Theme — "Charcoal"

| Token             | Value     | Usage                       |
| ----------------- | --------- | --------------------------- |
| `background`      | `#1C1C1E` | Deep charcoal base          |
| `backgroundAlt`   | `#2C2C2E` | Cards, elevated surfaces    |
| `foreground`      | `#E5E5E7` | Primary text (off-white)    |
| `foregroundMuted` | `#8E8E93` | Metadata, secondary text    |
| `primary`         | `#E5E5E7` | Links, interactive elements |
| `accent`          | `#D4A574` | Warm gold highlights        |
| `border`          | `#3A3A3C` | Subtle dividers             |

---

## Typography

### Font Stack

| Role         | Font       | Fallback              |
| ------------ | ---------- | --------------------- |
| **Headings** | Space Mono | monospace             |
| **Body**     | Inter      | system-ui, sans-serif |
| **Code**     | Space Mono | monospace             |

### Why Monospaced Headings?

The monospaced headers (`Space Mono`) give the design its distinctive "spec document" character. They evoke:

- Terminal output
- Technical documentation
- RFC/spec documents
- Code comments

### Type Scale

| Token  | Size     | Usage                  |
| ------ | -------- | ---------------------- |
| `xs`   | 0.75rem  | Fine print, timestamps |
| `sm`   | 0.875rem | Captions, metadata     |
| `base` | 1rem     | Body text              |
| `lg`   | 1.125rem | Large body             |
| `xl`   | 1.25rem  | Lead paragraphs        |
| `2xl`  | 1.5rem   | h4, section headers    |
| `3xl`  | 1.875rem | h3                     |
| `4xl`  | 2.25rem  | h1, h2                 |

---

## Spacing

Uses a consistent 4px base unit:

| Token | Value   | Pixels |
| ----- | ------- | ------ |
| `1`   | 0.25rem | 4px    |
| `2`   | 0.5rem  | 8px    |
| `3`   | 0.75rem | 12px   |
| `4`   | 1rem    | 16px   |
| `6`   | 1.5rem  | 24px   |
| `8`   | 2rem    | 32px   |
| `10`  | 2.5rem  | 40px   |
| `12`  | 3rem    | 48px   |

---

## Components

### UI Components (Kobalte + Vanilla Extract)

- **Button** — Solid, outline, ghost, link variants
- **Switch** — Toggle for boolean settings
- **ThemeSwitch** — Light/dark mode toggle with sun/moon icons
- **Text** — Typography component with semantic variants

### Design Tokens Location

```
apps/web/src/styles/
├── vars.css.ts      # Static tokens (spacing, fonts, radii)
├── theme.css.ts     # Theme definitions (light/dark colors)
├── global.css.ts    # Global styles
└── reset.css.ts     # CSS reset
```

---

## Inspiration

The "Refined Utilitarian" aesthetic draws from:

- **Hacker News** — Information density, numbered lists
- **GitHub README** — Clean markdown rendering
- **Bear Blog** — Minimalism, readability focus
- **LaTeX/Academic Papers** — Serious, technical credibility
