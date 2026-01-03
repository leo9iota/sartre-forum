import { For } from 'solid-js';

import { css } from '@styled-system/css';

import { Section } from '@/components/design/component-card';
import { DesignLayout } from '@/components/design/design-layout';

const shadows = [
  { name: 'xs', description: 'Subtle shadow for small elements' },
  { name: 'sm', description: 'Light shadow for cards and buttons' },
  { name: 'md', description: 'Medium shadow for dropdowns' },
  { name: 'lg', description: 'Prominent shadow for modals' },
  { name: 'xl', description: 'Strong shadow for floating elements' },
  { name: '2xl', description: 'Maximum elevation' }
];

export default function ShadowsPage() {
  return (
    <DesignLayout
      title='Shadows'
      description='Shadow tokens for creating depth and visual hierarchy.'
    >
      <Section title='Shadow Scale'>
        <div
          class={css({
            display: 'grid',
            gap: '6',
            gridTemplateColumns: { base: '1', md: '2', lg: '3' }
          })}
        >
          <For each={shadows}>
            {shadow => (
              <div
                class={css({
                  p: '6',
                  rounded: 'xl',
                  bg: 'bg.default',
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  h: '32'
                })}
                style={{ 'box-shadow': `var(--shadows-${shadow.name})` }}
              >
                <span class={css({ fontWeight: 'semibold', textStyle: 'lg' })}>{shadow.name}</span>
                <span
                  class={css({ color: 'fg.muted', textStyle: 'sm', textAlign: 'center', mt: '2' })}
                >
                  {shadow.description}
                </span>
              </div>
            )}
          </For>
        </div>
      </Section>

      <Section title='Usage'>
        <div
          class={css({ fontFamily: 'mono', bg: 'gray.2', p: '4', rounded: 'lg', textStyle: 'sm' })}
        >
          <code>{`<div class={css({ shadow: 'md' })} />`}</code>
        </div>
      </Section>
    </DesignLayout>
  );
}
