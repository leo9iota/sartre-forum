import { For } from 'solid-js';

import { vars } from '../../styles/vars.css';
import * as styles from './design.css';

const spacingTokens = [
  { name: '1', value: vars.space[1] },
  { name: '2', value: vars.space[2] },
  { name: '3', value: vars.space[3] },
  { name: '4', value: vars.space[4] },
  { name: '5', value: vars.space[5] },
  { name: '6', value: vars.space[6] },
  { name: '8', value: vars.space[8] },
  { name: '10', value: vars.space[10] },
  { name: '12', value: vars.space[12] },
  { name: '14', value: vars.space[14] },
  { name: '16', value: vars.space[16] },
  { name: '20', value: vars.space[20] },
  { name: '24', value: vars.space[24] },
  { name: '32', value: vars.space[32] },
  { name: '40', value: vars.space[40] },
  { name: '48', value: vars.space[48] },
  { name: '56', value: vars.space[56] },
  { name: '64', value: vars.space[64] }
];

export default function SpacingPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Spacing</h1>
        <p class={styles.pageDescription}>
          Consistent spacing scale for margins, padding, and gaps.
        </p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Spacing Scale</h2>
        <div style={{ display: 'flex', 'flex-direction': 'column', gap: vars.space[3] }}>
          <For each={spacingTokens}>
            {token => (
              <div style={{ display: 'flex', 'align-items': 'center', gap: vars.space[4] }}>
                <span class={styles.tokenLabel} style={{ width: '4rem' }}>
                  space.{token.name}
                </span>
                <div class={styles.spacingBar} style={{ width: token.value }} />
                <span class={styles.tokenValue}>{token.value}</span>
              </div>
            )}
          </For>
        </div>
      </section>
    </>
  );
}
