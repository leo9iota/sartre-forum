import type { JSX } from 'solid-js';

import { css } from '@styled-system/css';

interface TokenGridProps {
  children: JSX.Element;
  columns?: number;
}

const gridStyles = css({
  display: 'grid',
  gap: '4',
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))'
});

export function TokenGrid(props: TokenGridProps) {
  return <div class={gridStyles}>{props.children}</div>;
}

interface ColorSwatchProps {
  name: string;
  value: string;
  textColor?: 'light' | 'dark';
}

export function ColorSwatch(props: ColorSwatchProps) {
  return (
    <div
      class={css({
        rounded: 'lg',
        overflow: 'hidden',
        shadow: 'sm',
        borderWidth: '1px'
      })}
    >
      <div class={css({ h: '16', w: 'full' })} style={{ 'background-color': props.value }} />
      <div class={css({ p: '2', bg: 'bg.default' })}>
        <div class={css({ fontWeight: 'medium', textStyle: 'sm' })}>{props.name}</div>
        <div class={css({ color: 'fg.muted', textStyle: 'xs' })}>{props.value}</div>
      </div>
    </div>
  );
}

interface SpacingBoxProps {
  name: string;
  size: string;
}

export function SpacingBox(props: SpacingBoxProps) {
  return (
    <div class={css({ display: 'flex', alignItems: 'center', gap: '4' })}>
      <div
        class={css({ bg: 'accent.default', rounded: 'sm' })}
        style={{ width: props.size, height: props.size }}
      />
      <div>
        <div class={css({ fontWeight: 'medium' })}>{props.name}</div>
        <div class={css({ color: 'fg.muted', textStyle: 'sm' })}>{props.size}</div>
      </div>
    </div>
  );
}

interface ShadowBoxProps {
  name: string;
  shadowClass: string;
}

export function ShadowBox(props: ShadowBoxProps) {
  return (
    <div
      class={css({
        p: '6',
        rounded: 'lg',
        bg: 'bg.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      })}
      style={{ 'box-shadow': `var(--shadows-${props.shadowClass})` }}
    >
      <span class={css({ fontWeight: 'medium' })}>{props.name}</span>
    </div>
  );
}
