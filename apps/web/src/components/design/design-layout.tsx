import { For } from 'solid-js';
import type { JSX } from 'solid-js';

import { css } from '@styled-system/css';

const sidebarStyles = css({
  w: '64',
  borderRightWidth: '1px',
  p: '4',
  display: 'flex',
  flexDir: 'column',
  gap: '2',
  bg: 'gray.1',
  minH: '100vh'
});

const navLinkStyles = css({
  display: 'block',
  px: '3',
  py: '2',
  rounded: 'md',
  color: 'fg.muted',
  fontWeight: 'medium',
  transition: 'colors',
  _hover: { bg: 'gray.2', color: 'fg.default' },
  _currentPage: { bg: 'gray.3', color: 'fg.default' }
});

const contentStyles = css({
  flex: '1',
  p: '8',
  maxW: '5xl'
});

const layoutStyles = css({
  display: 'flex',
  minH: '100vh'
});

const navLinks = [
  { href: '/design', label: 'Overview' },
  { href: '/design/colors', label: 'Colors' },
  { href: '/design/typography', label: 'Typography' },
  { href: '/design/spacing', label: 'Spacing' },
  { href: '/design/shadows', label: 'Shadows' },
  { href: '/design/components', label: 'Components' }
];

interface DesignLayoutProps {
  children: JSX.Element;
  title: string;
  description?: string;
}

export function DesignLayout(props: DesignLayoutProps) {
  return (
    <div class={layoutStyles}>
      <aside class={sidebarStyles}>
        <h2 class={css({ textStyle: 'lg', fontWeight: 'bold', mb: '4' })}>Design System</h2>
        <nav>
          <For each={navLinks}>
            {link => (
              <a
                href={link.href}
                class={navLinkStyles}
                aria-current={
                  typeof window !== 'undefined' && window.location.pathname === link.href
                    ? 'page'
                    : undefined
                }
              >
                {link.label}
              </a>
            )}
          </For>
        </nav>
      </aside>
      <main class={contentStyles}>
        <h1 class={css({ textStyle: '4xl', fontWeight: 'bold', mb: '2' })}>{props.title}</h1>
        {props.description && (
          <p class={css({ color: 'fg.muted', mb: '8', textStyle: 'lg' })}>{props.description}</p>
        )}
        {props.children}
      </main>
    </div>
  );
}
