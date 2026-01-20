import { For } from 'solid-js';

import { vars } from '../../styles/vars.css';
import * as styles from './design.css';

const radiiTokens = [
  { name: 'sm', value: vars.radii.sm },
  { name: 'md', value: vars.radii.md },
  { name: 'lg', value: vars.radii.lg },
  { name: 'xl', value: vars.radii.xl },
  { name: '2xl', value: vars.radii['2xl'] },
  { name: '3xl', value: vars.radii['3xl'] },
  { name: 'full', value: vars.radii.full }
];

export default function RadiiPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Border Radii</h1>
        <p class={styles.pageDescription}>Corner radius tokens for consistent rounded corners.</p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Radius Scale</h2>
        <div class={styles.demoRow}>
          <For each={radiiTokens}>
            {token => (
              <div class={styles.tokenBox} style={{ 'align-items': 'center' }}>
                <div
                  style={{
                    width: '4rem',
                    height: '4rem',
                    background: vars.colors.primary,
                    'border-radius': token.value
                  }}
                />
                <span class={styles.tokenLabel}>radii.{token.name}</span>
                <span class={styles.tokenValue}>{token.value}</span>
              </div>
            )}
          </For>
        </div>
      </section>
    </>
  );
}
