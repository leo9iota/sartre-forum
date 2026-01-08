import { For } from 'solid-js';

import { Title } from '@solidjs/meta';
import { A, useLocation } from '@solidjs/router';
import type { RouteSectionProps } from '@solidjs/router';

import * as styles from './design/design.css';

const navItems = {
  foundations: [
    { href: '/design', label: 'Overview' },
    { href: '/design/colors', label: 'Colors' },
    { href: '/design/typography', label: 'Typography' },
    { href: '/design/spacing', label: 'Spacing' },
    { href: '/design/radii', label: 'Radii' },
    { href: '/design/shadows', label: 'Shadows' }
  ],
  components: [
    { href: '/design/components', label: 'Overview' },
    { href: '/design/components/button', label: 'Button' },
    { href: '/design/components/input', label: 'Input' },
    { href: '/design/components/switch', label: 'Switch' },
    { href: '/design/components/menu', label: 'Menu' },
    { href: '/design/components/avatar', label: 'Avatar' },
    { href: '/design/components/text', label: 'Text' },
    { href: '/design/components/tabs', label: 'Tabs' },
    { href: '/design/components/spinner', label: 'Spinner' },
    { href: '/design/components/progress', label: 'Progress' }
  ]
};

export default function DesignLayout(props: RouteSectionProps) {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/design') {
      return location.pathname === '/design';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <Title>Design System - Sartre</Title>
      <div class={styles.layoutWrapper}>
        <aside class={styles.sidebar}>
          <div class={styles.sidebarTitle}>Design System</div>

          <nav class={styles.navGroup}>
            <div class={styles.navGroupLabel}>Foundations</div>
            <ul class={styles.navList}>
              <For each={navItems.foundations}>
                {item => (
                  <li>
                    <A href={item.href} class={styles.navItem} data-active={isActive(item.href)}>
                      {item.label}
                    </A>
                  </li>
                )}
              </For>
            </ul>
          </nav>

          <nav class={styles.navGroup}>
            <div class={styles.navGroupLabel}>Components</div>
            <ul class={styles.navList}>
              <For each={navItems.components}>
                {item => (
                  <li>
                    <A href={item.href} class={styles.navItem} data-active={isActive(item.href)}>
                      {item.label}
                    </A>
                  </li>
                )}
              </For>
            </ul>
          </nav>
        </aside>

        <main class={styles.mainContent}>{props.children}</main>
      </div>
    </>
  );
}
