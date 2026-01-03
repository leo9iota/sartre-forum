import { For } from 'solid-js';

import { css } from '@styled-system/css';

import { ComponentCard, Section } from '@/components/design/component-card';
import { DesignLayout } from '@/components/design/design-layout';
import { ColorSwatch, TokenGrid } from '@/components/design/token-grid';

const grayScale = [
  { name: 'gray.1', value: 'var(--colors-gray-1)' },
  { name: 'gray.2', value: 'var(--colors-gray-2)' },
  { name: 'gray.3', value: 'var(--colors-gray-3)' },
  { name: 'gray.4', value: 'var(--colors-gray-4)' },
  { name: 'gray.5', value: 'var(--colors-gray-5)' },
  { name: 'gray.6', value: 'var(--colors-gray-6)' },
  { name: 'gray.7', value: 'var(--colors-gray-7)' },
  { name: 'gray.8', value: 'var(--colors-gray-8)' },
  { name: 'gray.9', value: 'var(--colors-gray-9)' },
  { name: 'gray.10', value: 'var(--colors-gray-10)' },
  { name: 'gray.11', value: 'var(--colors-gray-11)' },
  { name: 'gray.12', value: 'var(--colors-gray-12)' }
];

const semanticColors = [
  { name: 'fg.default', value: 'var(--colors-fg-default)' },
  { name: 'fg.muted', value: 'var(--colors-fg-muted)' },
  { name: 'fg.subtle', value: 'var(--colors-fg-subtle)' },
  { name: 'bg.default', value: 'var(--colors-bg-default)' },
  { name: 'bg.muted', value: 'var(--colors-bg-muted)' },
  { name: 'bg.subtle', value: 'var(--colors-bg-subtle)' },
  { name: 'border', value: 'var(--colors-border)' },
  { name: 'error', value: 'var(--colors-error)' }
];

const accentColors = [
  { name: 'accent.1', value: 'var(--colors-accent-1)' },
  { name: 'accent.2', value: 'var(--colors-accent-2)' },
  { name: 'accent.3', value: 'var(--colors-accent-3)' },
  { name: 'accent.4', value: 'var(--colors-accent-4)' },
  { name: 'accent.5', value: 'var(--colors-accent-5)' },
  { name: 'accent.6', value: 'var(--colors-accent-6)' },
  { name: 'accent.7', value: 'var(--colors-accent-7)' },
  { name: 'accent.8', value: 'var(--colors-accent-8)' },
  { name: 'accent.9', value: 'var(--colors-accent-9)' },
  { name: 'accent.10', value: 'var(--colors-accent-10)' },
  { name: 'accent.11', value: 'var(--colors-accent-11)' },
  { name: 'accent.12', value: 'var(--colors-accent-12)' }
];

export default function ColorsPage() {
  return (
    <DesignLayout
      title='Colors'
      description='Color tokens for consistent theming across the application.'
    >
      <Section title='Gray Scale'>
        <TokenGrid>
          <For each={grayScale}>
            {color => <ColorSwatch name={color.name} value={color.value} />}
          </For>
        </TokenGrid>
      </Section>

      <Section title='Semantic Colors'>
        <ComponentCard
          title='Foreground & Background'
          description='Context-aware colors that adapt to light/dark mode.'
        >
          <TokenGrid>
            <For each={semanticColors}>
              {color => <ColorSwatch name={color.name} value={color.value} />}
            </For>
          </TokenGrid>
        </ComponentCard>
      </Section>

      <Section title='Accent Colors'>
        <TokenGrid>
          <For each={accentColors}>
            {color => <ColorSwatch name={color.name} value={color.value} />}
          </For>
        </TokenGrid>
      </Section>

      <Section title='Usage'>
        <div
          class={css({ fontFamily: 'mono', bg: 'gray.2', p: '4', rounded: 'lg', textStyle: 'sm' })}
        >
          <code>{`<div class={css({ color: 'fg.muted', bg: 'gray.2' })} />`}</code>
        </div>
      </Section>
    </DesignLayout>
  );
}
