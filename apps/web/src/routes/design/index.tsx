import { A } from '@solidjs/router';

import * as styles from './design.css';

export default function DesignIndexPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Design System</h1>
        <p class={styles.pageDescription}>
          Tokens, foundations, and components for building consistent interfaces.
        </p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Foundations</h2>
        <div class={styles.grid}>
          <A href='/design/colors' class={styles.card}>
            <h3>Colors</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Theme-aware color tokens.
            </p>
          </A>
          <A href='/design/typography' class={styles.card}>
            <h3>Typography</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Font scales and text styles.
            </p>
          </A>
          <A href='/design/spacing' class={styles.card}>
            <h3>Spacing</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Consistent spacing scale.
            </p>
          </A>
          <A href='/design/shadows' class={styles.card}>
            <h3>Shadows</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Elevation and depth.
            </p>
          </A>
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Components</h2>
        <div class={styles.grid}>
          <A href='/design/components/button' class={styles.card}>
            <h3>Button</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Action triggers with variants.
            </p>
          </A>
          <A href='/design/components/input' class={styles.card}>
            <h3>Input</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Text input fields.
            </p>
          </A>
          <A href='/design/components/switch' class={styles.card}>
            <h3>Switch</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Boolean toggle control.
            </p>
          </A>
          <A href='/design/components/menu' class={styles.card}>
            <h3>Menu</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Dropdown with nested items.
            </p>
          </A>
          <A href='/design/components/avatar' class={styles.card}>
            <h3>Avatar</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              User profile images.
            </p>
          </A>
          <A href='/design/components/spinner' class={styles.card}>
            <h3>Spinner</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Circular progress indicator.
            </p>
          </A>
          <A href='/design/components/progress' class={styles.card}>
            <h3>Progress</h3>
            <p style={{ 'font-size': '0.875rem', color: 'var(--foreground-muted)' }}>
              Linear and circular indicators.
            </p>
          </A>
        </div>
      </section>
    </>
  );
}
