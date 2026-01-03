import type { JSX } from 'solid-js';

import { css } from '@styled-system/css';

interface ComponentCardProps {
  title: string;
  description?: string;
  children: JSX.Element;
}

const cardStyles = css({
  borderWidth: '1px',
  rounded: 'xl',
  overflow: 'hidden',
  bg: 'bg.default'
});

const headerStyles = css({
  p: '4',
  borderBottomWidth: '1px',
  bg: 'gray.1'
});

const previewStyles = css({
  p: '8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4',
  flexWrap: 'wrap',
  minH: '32'
});

export function ComponentCard(props: ComponentCardProps) {
  return (
    <div class={cardStyles}>
      <div class={headerStyles}>
        <h3 class={css({ fontWeight: 'semibold', textStyle: 'lg' })}>{props.title}</h3>
        {props.description && (
          <p class={css({ color: 'fg.muted', textStyle: 'sm', mt: '1' })}>{props.description}</p>
        )}
      </div>
      <div class={previewStyles}>{props.children}</div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: JSX.Element;
}

export function Section(props: SectionProps) {
  return (
    <section class={css({ mb: '12' })}>
      <h2 class={css({ textStyle: '2xl', fontWeight: 'bold', mb: '6' })}>{props.title}</h2>
      {props.children}
    </section>
  );
}
