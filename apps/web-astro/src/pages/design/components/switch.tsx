import { Switch } from '@/components/ui/switch';

import * as styles from '../design.css';

export default function SwitchPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Switch</h1>
        <p class={styles.pageDescription}>Boolean toggle control for on/off states.</p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Basic Usage</h2>
        <div class={styles.demoRow}>
          <Switch>Enable notifications</Switch>
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>States</h2>
        <div class={styles.demoRow}>
          <Switch>Default</Switch>
          <Switch checked>Checked</Switch>
          <Switch disabled>Disabled</Switch>
        </div>
      </section>
    </>
  );
}
