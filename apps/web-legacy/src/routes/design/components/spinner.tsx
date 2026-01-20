import { Spinner } from '@/components/ui/spinner';

import * as styles from '../design.css';

export default function SpinnerPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Spinner</h1>
        <p class={styles.pageDescription}>
          MUI-style circular progress indicator with smooth animations.
        </p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Sizes</h2>
        <div class={styles.demoRow} style={{ 'align-items': 'center' }}>
          <Spinner size='xs' />
          <Spinner size='sm' />
          <Spinner size='md' />
          <Spinner size='lg' />
          <Spinner size='xl' />
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Colors</h2>
        <div class={styles.demoRow} style={{ 'align-items': 'center' }}>
          <Spinner color='primary' />
          <Spinner color='accent' />
          <Spinner color='foreground' />
          <Spinner color='muted' />
          <Spinner color='success' />
          <Spinner color='warning' />
          <Spinner color='error' />
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Thickness</h2>
        <div class={styles.demoRow} style={{ 'align-items': 'center' }}>
          <Spinner size='lg' thickness={2} />
          <Spinner size='lg' thickness={3.6} />
          <Spinner size='lg' thickness={5} />
          <Spinner size='lg' thickness={8} />
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>In Context</h2>
        <div class={styles.demoRow} style={{ 'align-items': 'center' }}>
          <button
            style={{
              display: 'inline-flex',
              'align-items': 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'var(--background-alt)',
              border: '1px solid var(--border)',
              'border-radius': '0.375rem',
              color: 'var(--foreground)',
              cursor: 'pointer'
            }}
          >
            <Spinner size='sm' color='inherit' />
            Loading...
          </button>
        </div>
      </section>
    </>
  );
}
