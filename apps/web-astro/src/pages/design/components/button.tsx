import { Button } from '@/components/ui/button';

import * as styles from '../design.css';

export default function ButtonPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Button</h1>
        <p class={styles.pageDescription}>Action trigger with multiple variants and sizes.</p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Variants</h2>
        <div class={styles.demoRow}>
          <Button variant='solid'>Solid</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='link'>Link</Button>
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Sizes</h2>
        <div class={styles.demoRow} style={{ 'align-items': 'flex-end' }}>
          <Button size='xs'>XS</Button>
          <Button size='sm'>SM</Button>
          <Button size='md'>MD</Button>
          <Button size='lg'>LG</Button>
          <Button size='xl'>XL</Button>
          <Button size='2xl'>2XL</Button>
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>States</h2>
        <div class={styles.demoRow}>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </section>
    </>
  );
}
