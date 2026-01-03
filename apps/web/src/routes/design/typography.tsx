import { For } from 'solid-js';

import { css } from '@styled-system/css';

import { Section } from '@/components/design/component-card';
import { DesignLayout } from '@/components/design/design-layout';

const textSizes = [
  { name: 'xs', class: css({ textStyle: 'xs' }), size: '0.75rem / 12px' },
  { name: 'sm', class: css({ textStyle: 'sm' }), size: '0.875rem / 14px' },
  { name: 'md', class: css({ textStyle: 'md' }), size: '1rem / 16px' },
  { name: 'lg', class: css({ textStyle: 'lg' }), size: '1.125rem / 18px' },
  { name: 'xl', class: css({ textStyle: 'xl' }), size: '1.25rem / 20px' },
  { name: '2xl', class: css({ textStyle: '2xl' }), size: '1.5rem / 24px' },
  { name: '3xl', class: css({ textStyle: '3xl' }), size: '1.875rem / 30px' },
  { name: '4xl', class: css({ textStyle: '4xl' }), size: '2.25rem / 36px' },
  { name: '5xl', class: css({ textStyle: '5xl' }), size: '3rem / 48px' },
  { name: '6xl', class: css({ textStyle: '6xl' }), size: '3.75rem / 60px' }
];

const fontWeights = [
  { name: 'normal', class: css({ fontWeight: 'normal' }), value: '400' },
  { name: 'medium', class: css({ fontWeight: 'medium' }), value: '500' },
  { name: 'semibold', class: css({ fontWeight: 'semibold' }), value: '600' },
  { name: 'bold', class: css({ fontWeight: 'bold' }), value: '700' }
];

export default function TypographyPage() {
  return (
    <DesignLayout
      title='Typography'
      description='Text styles, sizes, and font weights for readable content.'
    >
      <Section title='Text Sizes'>
        <div class={css({ display: 'flex', flexDir: 'column', gap: '6' })}>
          <For each={textSizes}>
            {style => (
              <div class={css({ display: 'flex', alignItems: 'baseline', gap: '4' })}>
                <span class={css({ w: '16', color: 'fg.muted', textStyle: 'sm' })}>
                  {style.name}
                </span>
                <span class={style.class}>The quick brown fox jumps over the lazy dog.</span>
                <span class={css({ color: 'fg.subtle', textStyle: 'xs', fontFamily: 'mono' })}>
                  {style.size}
                </span>
              </div>
            )}
          </For>
        </div>
      </Section>

      <Section title='Font Weights'>
        <div class={css({ display: 'flex', flexDir: 'column', gap: '4' })}>
          <For each={fontWeights}>
            {weight => (
              <div class={css({ display: 'flex', alignItems: 'baseline', gap: '4' })}>
                <span class={css({ w: '24', color: 'fg.muted', textStyle: 'sm' })}>
                  {weight.name}
                </span>
                <span class={`${weight.class} ${css({ textStyle: '2xl' })}`}>
                  The quick brown fox ({weight.value})
                </span>
              </div>
            )}
          </For>
        </div>
      </Section>

      <Section title='Heading Hierarchy'>
        <div class={css({ display: 'flex', flexDir: 'column', gap: '4' })}>
          <h1 class={css({ textStyle: '5xl', fontWeight: 'bold' })}>Heading 1 (5xl)</h1>
          <h2 class={css({ textStyle: '4xl', fontWeight: 'bold' })}>Heading 2 (4xl)</h2>
          <h3 class={css({ textStyle: '3xl', fontWeight: 'semibold' })}>Heading 3 (3xl)</h3>
          <h4 class={css({ textStyle: '2xl', fontWeight: 'semibold' })}>Heading 4 (2xl)</h4>
          <h5 class={css({ textStyle: 'xl', fontWeight: 'medium' })}>Heading 5 (xl)</h5>
          <h6 class={css({ textStyle: 'lg', fontWeight: 'medium' })}>Heading 6 (lg)</h6>
        </div>
      </Section>

      <Section title='Usage'>
        <div
          class={css({ fontFamily: 'mono', bg: 'gray.2', p: '4', rounded: 'lg', textStyle: 'sm' })}
        >
          <code>{`<h1 class={css({ textStyle: '4xl', fontWeight: 'bold' })}>Title</h1>`}</code>
        </div>
      </Section>
    </DesignLayout>
  );
}
