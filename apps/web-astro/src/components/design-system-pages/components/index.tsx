import { A } from '@solidjs/router';
import { For } from 'solid-js';

import * as styles from '../design.css';

export default function ComponentsIndexPage() {
  const components = [
    {
      href: '/design/components/button',
      name: 'Button',
      desc: 'Action triggers with variants and sizes.'
    },
    {
      href: '/design/components/input',
      name: 'Input',
      desc: 'Text input fields with size variants.'
    },
    { href: '/design/components/switch', name: 'Switch', desc: 'Boolean toggle control.' },
    {
      href: '/design/components/menu',
      name: 'Menu',
      desc: 'Dropdown menu with nested submenus.'
    },
    {
      href: '/design/components/avatar',
      name: 'Avatar',
      desc: 'User profile images with fallback initials.'
    },
    {
      href: '/design/components/text',
      name: 'Text',
      desc: 'Typography component with variants.'
    },
    {
      href: '/design/components/tabs',
      name: 'Tabs',
      desc: 'Tabbed interface for content organization.'
    },
    {
      href: '/design/components/spinner',
      name: 'Spinner',
      desc: 'Circular progress indicator with smooth animation.'
    },
    {
      href: '/design/components/progress',
      name: 'Progress',
      desc: 'Linear and circular progress indicators.'
    }
  ];

  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Components</h1>
        <p class={styles.pageDescription}>
          Interactive UI components built with Ark UI and styled with Vanilla Extract.
        </p>
      </header>

      <section class={styles.section}>
        <div class={styles.grid}>
          <For each={components}>
            {c => (
              <A href={c.href} class={styles.card}>
                <h3>{c.name}</h3>
                <p
                  style={{
                    'font-size': '0.875rem',
                    color: 'var(--foreground-muted)'
                  }}
                >
                  {c.desc}
                </p>
              </A>
            )}
          </For>
        </div>
      </section>
    </>
  );
}
