import { Text } from '@/components/ui/text';

import * as styles from '../design.css';

export default function TextPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Text</h1>
        <p class={styles.pageDescription}>Typography component with semantic variants.</p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Heading Variants</h2>
        <div style={{ display: 'flex', 'flex-direction': 'column', gap: '0.5rem' }}>
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="h4">Heading 4</Text>
          <Text variant="h5">Heading 5</Text>
          <Text variant="h6">Heading 6</Text>
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Body Variants</h2>
        <div style={{ display: 'flex', 'flex-direction': 'column', gap: '0.5rem' }}>
          <Text variant="lead">Lead paragraph text</Text>
          <Text variant="body-lg">Large body text</Text>
          <Text variant="body">Regular body text</Text>
          <Text variant="body-sm">Small body text</Text>
          <Text variant="caption">Caption text</Text>
          <Text variant="label">Label text</Text>
          <Text variant="code">Code text</Text>
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Colors</h2>
        <div class={styles.demoRow}>
          <Text>Default</Text>
          <Text color="muted">Muted</Text>
          <Text color="primary">Primary</Text>
          <Text color="accent">Accent</Text>
        </div>
      </section>
    </>
  );
}
