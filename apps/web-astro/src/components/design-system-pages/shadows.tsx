import { For } from 'solid-js';

import { vars } from '../../styles/vars.css';
import * as styles from './design.css';

const shadowTokens = [
  { name: 'xs', value: vars.shadows.xs },
  { name: 'sm', value: vars.shadows.sm },
  { name: 'md', value: vars.shadows.md },
  { name: 'lg', value: vars.shadows.lg },
  { name: 'xl', value: vars.shadows.xl },
  { name: 'inner', value: vars.shadows.inner }
];

export default function ShadowsPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Shadows</h1>
        <p class={styles.pageDescription}>Elevation and depth tokens for visual hierarchy.</p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Shadow Scale</h2>
        <div class={styles.grid}>
          <For each={shadowTokens}>
            {token => (
              <div class={styles.tokenBox}>
                <div
                  style={{
                    width: '100%',
                    height: '4rem',
                    background: vars.colors.background,
                    'border-radius': vars.radii.md,
                    'box-shadow': token.value
                  }}
                />
                <span class={styles.tokenLabel}>shadows.{token.name}</span>
              </div>
            )}
          </For>
        </div>
      </section>
    </>
  );
}
