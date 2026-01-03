import { For } from 'solid-js';

import { css } from '@styled-system/css';

import { Section } from '@/components/design/component-card';
import { DesignLayout } from '@/components/design/design-layout';

const spacingScale = [
  { name: '0', value: '0px' },
  { name: '0.5', value: '0.125rem (2px)' },
  { name: '1', value: '0.25rem (4px)' },
  { name: '2', value: '0.5rem (8px)' },
  { name: '3', value: '0.75rem (12px)' },
  { name: '4', value: '1rem (16px)' },
  { name: '5', value: '1.25rem (20px)' },
  { name: '6', value: '1.5rem (24px)' },
  { name: '8', value: '2rem (32px)' },
  { name: '10', value: '2.5rem (40px)' },
  { name: '12', value: '3rem (48px)' },
  { name: '16', value: '4rem (64px)' },
  { name: '20', value: '5rem (80px)' },
  { name: '24', value: '6rem (96px)' }
];

export default function SpacingPage() {
  return (
    <DesignLayout
      title='Spacing'
      description='Spacing scale for consistent margins, padding, and gaps.'
    >
      <Section title='Spacing Scale'>
        <div class={css({ display: 'flex', flexDir: 'column', gap: '4' })}>
          <For each={spacingScale}>
            {space => (
              <div class={css({ display: 'flex', alignItems: 'center', gap: '4' })}>
                <span class={css({ w: '12', fontFamily: 'mono', textStyle: 'sm' })}>
                  {space.name}
                </span>
                <div
                  class={css({ bg: 'accent.9', rounded: 'sm', h: '6' })}
                  style={{ width: `calc(${space.name} * 0.25rem)` }}
                />
                <span class={css({ color: 'fg.muted', textStyle: 'sm' })}>{space.value}</span>
              </div>
            )}
          </For>
        </div>
      </Section>

      <Section title='Gap Examples'>
        <div class={css({ display: 'flex', flexDir: 'column', gap: '8' })}>
          <div>
            <p class={css({ color: 'fg.muted', textStyle: 'sm', mb: '2' })}>gap: 2 (8px)</p>
            <div class={css({ display: 'flex', gap: '2' })}>
              <div class={css({ w: '12', h: '12', bg: 'gray.4', rounded: 'md' })} />
              <div class={css({ w: '12', h: '12', bg: 'gray.4', rounded: 'md' })} />
              <div class={css({ w: '12', h: '12', bg: 'gray.4', rounded: 'md' })} />
            </div>
          </div>
          <div>
            <p class={css({ color: 'fg.muted', textStyle: 'sm', mb: '2' })}>gap: 4 (16px)</p>
            <div class={css({ display: 'flex', gap: '4' })}>
              <div class={css({ w: '12', h: '12', bg: 'gray.4', rounded: 'md' })} />
              <div class={css({ w: '12', h: '12', bg: 'gray.4', rounded: 'md' })} />
              <div class={css({ w: '12', h: '12', bg: 'gray.4', rounded: 'md' })} />
            </div>
          </div>
          <div>
            <p class={css({ color: 'fg.muted', textStyle: 'sm', mb: '2' })}>gap: 8 (32px)</p>
            <div class={css({ display: 'flex', gap: '8' })}>
              <div class={css({ w: '12', h: '12', bg: 'gray.4', rounded: 'md' })} />
              <div class={css({ w: '12', h: '12', bg: 'gray.4', rounded: 'md' })} />
              <div class={css({ w: '12', h: '12', bg: 'gray.4', rounded: 'md' })} />
            </div>
          </div>
        </div>
      </Section>

      <Section title='Usage'>
        <div
          class={css({ fontFamily: 'mono', bg: 'gray.2', p: '4', rounded: 'lg', textStyle: 'sm' })}
        >
          <code>{`<div class={css({ p: '4', m: '2', gap: '4' })} />`}</code>
        </div>
      </Section>
    </DesignLayout>
  );
}
