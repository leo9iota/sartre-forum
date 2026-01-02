import { For } from 'solid-js';

import { css } from '@styled-system/css';

export default function DesignSystemPage() {
  const grayShades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const semanticColors = [
    { name: 'bg.default', token: 'bg.default' },
    { name: 'bg.subtle', token: 'bg.subtle' },
    { name: 'bg.muted', token: 'bg.muted' },
    { name: 'fg.default', token: 'fg.default' },
    { name: 'fg.muted', token: 'fg.muted' },
    { name: 'fg.subtle', token: 'fg.subtle' },
    { name: 'border.default', token: 'border.default' },
    { name: 'border.muted', token: 'border.muted' },
    { name: 'border.subtle', token: 'border.subtle' }
  ];
  const spacingTokens = [
    { size: '1', px: '4px' },
    { size: '2', px: '8px' },
    { size: '3', px: '12px' },
    { size: '4', px: '16px' },
    { size: '6', px: '24px' },
    { size: '8', px: '32px' },
    { size: '10', px: '40px' },
    { size: '12', px: '48px' },
    { size: '16', px: '64px' }
  ];
  const radii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'];
  const shadows = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

  return (
    <div class={css({ maxW: '6xl', mx: 'auto', p: '8' })}>
      <header class={css({ mb: '12' })}>
        <h1
          class={css({
            textStyle: '5xl',
            fontWeight: 'bold',
            mb: '4',
            color: 'fg.default'
          })}
        >
          Design System
        </h1>
        <p class={css({ textStyle: 'lg', color: 'fg.muted' })}>
          A showcase of the Sartre design tokens and components powered by Panda CSS and Park UI.
        </p>
      </header>

      {/* Color Palette Section */}
      <section class={css({ mb: '12' })}>
        <h2
          class={css({
            textStyle: '3xl',
            fontWeight: 'semibold',
            mb: '6',
            color: 'fg.default'
          })}
        >
          Color Palette
        </h2>

        {/* Neutral Grays */}
        <div class={css({ mb: '8' })}>
          <h3
            class={css({
              textStyle: 'lg',
              fontWeight: 'medium',
              mb: '4',
              color: 'fg.muted'
            })}
          >
            Neutral Gray Scale
          </h3>
          <div class={css({ display: 'flex', gap: '2', flexWrap: 'wrap' })}>
            <For each={grayShades}>
              {shade => (
                <div
                  class={css({
                    w: '16',
                    h: '16',
                    rounded: 'lg',
                    shadow: 'sm',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'center',
                    pb: '1',
                    textStyle: 'xs',
                    fontWeight: 'medium'
                  })}
                  style={{
                    'background-color': `var(--colors-neutral-${shade})`,
                    color: shade > 6 ? 'white' : 'black'
                  }}
                >
                  {shade}
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Semantic Colors */}
        <div class={css({ mb: '8' })}>
          <h3
            class={css({
              textStyle: 'lg',
              fontWeight: 'medium',
              mb: '4',
              color: 'fg.muted'
            })}
          >
            Semantic Colors
          </h3>
          <div
            class={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '4'
            })}
          >
            <For each={semanticColors}>
              {color => <ColorCard name={color.name} token={color.token} />}
            </For>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section class={css({ mb: '12' })}>
        <h2
          class={css({
            textStyle: '3xl',
            fontWeight: 'semibold',
            mb: '6',
            color: 'fg.default'
          })}
        >
          Typography
        </h2>
        <div class={css({ display: 'flex', flexDir: 'column', gap: '4' })}>
          <p class={css({ textStyle: '7xl', fontWeight: 'bold' })}>7xl - Display</p>
          <p class={css({ textStyle: '5xl', fontWeight: 'bold' })}>5xl - Heading 1</p>
          <p class={css({ textStyle: '4xl', fontWeight: 'semibold' })}>4xl - Heading 2</p>
          <p class={css({ textStyle: '3xl', fontWeight: 'semibold' })}>3xl - Heading 3</p>
          <p class={css({ textStyle: '2xl', fontWeight: 'medium' })}>2xl - Heading 4</p>
          <p class={css({ textStyle: 'xl', fontWeight: 'medium' })}>xl - Heading 5</p>
          <p class={css({ textStyle: 'lg' })}>lg - Large Text</p>
          <p class={css({ textStyle: 'md' })}>md - Body Text (default)</p>
          <p class={css({ textStyle: 'sm', color: 'fg.muted' })}>sm - Small Text</p>
          <p class={css({ textStyle: 'xs', color: 'fg.subtle' })}>xs - Caption Text</p>
        </div>
      </section>

      {/* Spacing Section */}
      <section class={css({ mb: '12' })}>
        <h2
          class={css({
            textStyle: '3xl',
            fontWeight: 'semibold',
            mb: '6',
            color: 'fg.default'
          })}
        >
          Spacing Scale
        </h2>
        <div class={css({ display: 'flex', flexDir: 'column', gap: '3' })}>
          <For each={spacingTokens}>
            {item => (
              <div class={css({ display: 'flex', alignItems: 'center', gap: '4' })}>
                <span
                  class={css({
                    w: '12',
                    textStyle: 'sm',
                    color: 'fg.muted',
                    fontFamily: 'mono'
                  })}
                >
                  {item.size}
                </span>
                <div
                  class={css({
                    h: '6',
                    bg: 'neutral.9',
                    rounded: 'sm'
                  })}
                  style={{ width: item.px }}
                />
                <span
                  class={css({
                    textStyle: 'xs',
                    color: 'fg.subtle',
                    fontFamily: 'mono'
                  })}
                >
                  {item.px}
                </span>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* Border Radius Section */}
      <section class={css({ mb: '12' })}>
        <h2
          class={css({
            textStyle: '3xl',
            fontWeight: 'semibold',
            mb: '6',
            color: 'fg.default'
          })}
        >
          Border Radius
        </h2>
        <div class={css({ display: 'flex', gap: '6', flexWrap: 'wrap' })}>
          <For each={radii}>
            {radius => (
              <div class={css({ textAlign: 'center' })}>
                <div
                  class={css({
                    w: '16',
                    h: '16',
                    bg: 'neutral.9',
                    mb: '2'
                  })}
                  style={{ 'border-radius': `var(--radii-${radius})` }}
                />
                <span class={css({ textStyle: 'sm', color: 'fg.muted' })}>{radius}</span>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* Shadows Section */}
      <section class={css({ mb: '12' })}>
        <h2
          class={css({
            textStyle: '3xl',
            fontWeight: 'semibold',
            mb: '6',
            color: 'fg.default'
          })}
        >
          Shadows
        </h2>
        <div class={css({ display: 'flex', gap: '8', flexWrap: 'wrap' })}>
          <For each={shadows}>
            {size => (
              <div class={css({ textAlign: 'center' })}>
                <div
                  class={css({
                    w: '24',
                    h: '24',
                    bg: 'bg.default',
                    rounded: 'lg',
                    mb: '2'
                  })}
                  style={{ 'box-shadow': `var(--shadows-${size})` }}
                />
                <span class={css({ textStyle: 'sm', color: 'fg.muted' })}>{size}</span>
              </div>
            )}
          </For>
        </div>
      </section>
    </div>
  );
}

function ColorCard(props: { name: string; token: string }) {
  return (
    <div
      class={css({
        p: '4',
        rounded: 'lg',
        border: '1px solid',
        borderColor: 'border.subtle'
      })}
    >
      <div
        class={css({
          w: 'full',
          h: '12',
          rounded: 'md',
          mb: '2'
        })}
        style={{
          'background-color': `var(--colors-${props.token.replace('.', '-')})`
        }}
      />
      <p class={css({ textStyle: 'sm', fontWeight: 'medium' })}>{props.name}</p>
      <p class={css({ textStyle: 'xs', color: 'fg.muted', fontFamily: 'mono' })}>{props.token}</p>
    </div>
  );
}
