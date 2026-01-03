import { css } from '@styled-system/css';

import { DesignLayout } from '@/components/design/design-layout';

const cardStyles = css({
  p: '6',
  borderWidth: '1px',
  rounded: 'xl',
  bg: 'gray.1',
  _hover: { bg: 'gray.2' },
  transition: 'colors'
});

const sections = [
  {
    title: 'Colors',
    href: '/design/colors',
    description: 'Color palette including grays, semantic colors, and accent colors.'
  },
  {
    title: 'Typography',
    href: '/design/typography',
    description: 'Text styles, font sizes, weights, and heading hierarchy.'
  },
  {
    title: 'Spacing',
    href: '/design/spacing',
    description: 'Spacing scale for margins, padding, and gaps.'
  },
  {
    title: 'Shadows',
    href: '/design/shadows',
    description: 'Shadow tokens for depth and elevation.'
  },
  {
    title: 'Components',
    href: '/design/components',
    description: 'Interactive component gallery with all Park UI components.'
  }
];

export default function DesignIndex() {
  return (
    <DesignLayout
      title='Design System'
      description='A comprehensive design system built with Park UI, Panda CSS, and Ark UI.'
    >
      <div class={css({ display: 'grid', gap: '4', gridTemplateColumns: { base: '1', md: '2' } })}>
        {sections.map(section => (
          <a href={section.href} class={cardStyles}>
            <h3 class={css({ fontWeight: 'semibold', textStyle: 'lg', mb: '2' })}>
              {section.title}
            </h3>
            <p class={css({ color: 'fg.muted' })}>{section.description}</p>
          </a>
        ))}
      </div>

      <div class={css({ mt: '12', p: '6', bg: 'gray.2', rounded: 'xl' })}>
        <h3 class={css({ fontWeight: 'semibold', textStyle: 'lg', mb: '4' })}>Quick Start</h3>
        <div
          class={css({ fontFamily: 'mono', bg: 'gray.3', p: '4', rounded: 'lg', textStyle: 'sm' })}
        >
          <code>{`import { Button } from '@/components/ui/button';`}</code>
          <br />
          <code>{`import { css } from '@styled-system/css';`}</code>
        </div>
      </div>
    </DesignLayout>
  );
}
