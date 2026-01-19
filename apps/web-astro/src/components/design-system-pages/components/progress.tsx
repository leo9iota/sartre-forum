import { ProgressBar, ProgressCircle } from '@/components/ui/progress';

import * as styles from '../design.css';

export default function ProgressPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Progress</h1>
        <p class={styles.pageDescription}>
          Linear and circular progress indicators with determinate and indeterminate states.
        </p>
      </header>

      {/* LINEAR PROGRESS BAR */}
      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Linear Progress Bar</h2>

        <h3 style={{ 'font-size': '1rem', 'margin-bottom': '0.75rem' }}>Values</h3>
        <div
          style={{
            display: 'flex',
            'flex-direction': 'column',
            gap: '1rem',
            'max-width': '400px'
          }}
        >
          <ProgressBar value={25} label="25%" showValue />
          <ProgressBar value={50} label="50%" showValue />
          <ProgressBar value={75} label="75%" showValue />
          <ProgressBar value={100} label="Complete" showValue />
        </div>

        <h3
          style={{
            'font-size': '1rem',
            'margin-top': '1.5rem',
            'margin-bottom': '0.75rem'
          }}
        >
          Sizes
        </h3>
        <div
          style={{
            display: 'flex',
            'flex-direction': 'column',
            gap: '1rem',
            'max-width': '400px'
          }}
        >
          <ProgressBar value={60} size="sm" label="Small" />
          <ProgressBar value={60} size="md" label="Medium" />
          <ProgressBar value={60} size="lg" label="Large" />
        </div>

        <h3
          style={{
            'font-size': '1rem',
            'margin-top': '1.5rem',
            'margin-bottom': '0.75rem'
          }}
        >
          Colors
        </h3>
        <div
          style={{
            display: 'flex',
            'flex-direction': 'column',
            gap: '1rem',
            'max-width': '400px'
          }}
        >
          <ProgressBar value={60} color="primary" label="Primary" />
          <ProgressBar value={60} color="accent" label="Accent" />
          <ProgressBar value={60} color="success" label="Success" />
          <ProgressBar value={60} color="warning" label="Warning" />
          <ProgressBar value={60} color="error" label="Error" />
        </div>

        <h3
          style={{
            'font-size': '1rem',
            'margin-top': '1.5rem',
            'margin-bottom': '0.75rem'
          }}
        >
          Indeterminate (Animation)
        </h3>
        <div
          style={{
            display: 'flex',
            'flex-direction': 'column',
            gap: '1rem',
            'max-width': '400px'
          }}
        >
          <ProgressBar value={null} label="Slide (default)" animation="slide" />
          <ProgressBar value={null} label="None (static)" animation="none" />
        </div>
      </section>

      {/* CIRCULAR PROGRESS */}
      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Circular Progress</h2>

        <h3 style={{ 'font-size': '1rem', 'margin-bottom': '0.75rem' }}>Values</h3>
        <div class={styles.demoRow} style={{ 'align-items': 'flex-end' }}>
          <ProgressCircle value={25} showValue />
          <ProgressCircle value={50} showValue />
          <ProgressCircle value={75} showValue />
          <ProgressCircle value={100} showValue />
        </div>

        <h3
          style={{
            'font-size': '1rem',
            'margin-top': '1.5rem',
            'margin-bottom': '0.75rem'
          }}
        >
          Sizes
        </h3>
        <div class={styles.demoRow} style={{ 'align-items': 'center' }}>
          <ProgressCircle value={60} size="sm" />
          <ProgressCircle value={60} size="md" />
          <ProgressCircle value={60} size="lg" />
        </div>

        <h3
          style={{
            'font-size': '1rem',
            'margin-top': '1.5rem',
            'margin-bottom': '0.75rem'
          }}
        >
          Colors
        </h3>
        <div class={styles.demoRow} style={{ 'align-items': 'center' }}>
          <ProgressCircle value={60} color="primary" />
          <ProgressCircle value={60} color="accent" />
          <ProgressCircle value={60} color="success" />
          <ProgressCircle value={60} color="warning" />
          <ProgressCircle value={60} color="error" />
        </div>

        <h3
          style={{
            'font-size': '1rem',
            'margin-top': '1.5rem',
            'margin-bottom': '0.75rem'
          }}
        >
          Thickness
        </h3>
        <div class={styles.demoRow} style={{ 'align-items': 'center' }}>
          <ProgressCircle value={60} size="lg" thickness={2} />
          <ProgressCircle value={60} size="lg" thickness={4} />
          <ProgressCircle value={60} size="lg" thickness={6} />
          <ProgressCircle value={60} size="lg" thickness={8} />
        </div>

        <h3
          style={{
            'font-size': '1rem',
            'margin-top': '1.5rem',
            'margin-bottom': '0.75rem'
          }}
        >
          Indeterminate
        </h3>
        <div class={styles.demoRow} style={{ 'align-items': 'center' }}>
          <ProgressCircle value={null} size="sm" />
          <ProgressCircle value={null} size="md" />
          <ProgressCircle value={null} size="lg" />
        </div>
      </section>
    </>
  );
}
