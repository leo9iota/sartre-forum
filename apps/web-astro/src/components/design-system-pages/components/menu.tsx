import { MenuDemo } from '@/components/ui/menu/menu-demo';

import * as styles from '../design.css';

export default function MenuPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Menu</h1>
        <p class={styles.pageDescription}>
          Dropdown menu with nested submenus and keyboard navigation.
        </p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Demo</h2>
        <div class={styles.demoRow}>
          <MenuDemo />
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Features</h2>
        <ul style={{ 'padding-left': '1.5rem', 'line-height': '1.8' }}>
          <li>Nested submenus</li>
          <li>Item groups with labels</li>
          <li>Keyboard navigation (Arrow keys, Enter, Escape)</li>
          <li>Icon support</li>
          <li>Separators</li>
        </ul>
      </section>
    </>
  );
}
