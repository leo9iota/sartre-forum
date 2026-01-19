import { Input } from '@/components/ui/input';

import * as styles from '../design.css';

export default function InputPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Input</h1>
        <p class={styles.pageDescription}>Text input field with size variants.</p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Sizes</h2>
        <div
          style={{
            display: 'flex',
            'flex-direction': 'column',
            gap: '1rem',
            'max-width': '20rem'
          }}
        >
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input (default)" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>States</h2>
        <div
          style={{
            display: 'flex',
            'flex-direction': 'column',
            gap: '1rem',
            'max-width': '20rem'
          }}
        >
          <Input placeholder="Default" />
          <Input placeholder="Disabled" disabled />
        </div>
      </section>
    </>
  );
}
