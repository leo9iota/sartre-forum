import { For } from 'solid-js';

import { vars } from '@/styles/vars.css';

import * as styles from './design.css';

const colorTokens = [
  { name: 'background', cssVar: vars.colors.background },
  { name: 'backgroundAlt', cssVar: vars.colors.backgroundAlt },
  { name: 'foreground', cssVar: vars.colors.foreground },
  { name: 'foregroundMuted', cssVar: vars.colors.foregroundMuted },
  { name: 'primary', cssVar: vars.colors.primary },
  { name: 'primaryHover', cssVar: vars.colors.primaryHover },
  { name: 'accent', cssVar: vars.colors.accent },
  { name: 'border', cssVar: vars.colors.border },
  { name: 'borderStrong', cssVar: vars.colors.borderStrong },
  { name: 'error', cssVar: vars.colors.error },
  { name: 'errorMuted', cssVar: vars.colors.errorMuted },
  { name: 'success', cssVar: vars.colors.success },
  { name: 'successMuted', cssVar: vars.colors.successMuted },
  { name: 'warning', cssVar: vars.colors.warning },
  { name: 'warningMuted', cssVar: vars.colors.warningMuted },
  { name: 'ring', cssVar: vars.colors.ring },
  { name: 'overlay', cssVar: vars.colors.overlay }
];

export default function ColorsPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Colors</h1>
        <p class={styles.pageDescription}>
          Theme-aware color tokens that adapt to light and dark modes.
        </p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Color Tokens</h2>
        <div class={styles.grid}>
          <For each={colorTokens}>
            {token => (
              <div class={styles.tokenBox}>
                <div class={styles.colorSwatch} style={{ background: token.cssVar }} />
                <span class={styles.tokenLabel}>{token.name}</span>
              </div>
            )}
          </For>
        </div>
      </section>
    </>
  );
}
