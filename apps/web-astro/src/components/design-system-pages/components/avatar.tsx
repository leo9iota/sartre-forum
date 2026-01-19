import { Avatar } from '@/components/ui/avatar';

import * as styles from '../design.css';

export default function AvatarPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Avatar</h1>
        <p class={styles.pageDescription}>User profile images with fallback initials.</p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Sizes</h2>
        <div class={styles.demoRow}>
          <Avatar size="xs" name="John Doe" />
          <Avatar size="sm" name="John Doe" />
          <Avatar size="md" name="John Doe" />
          <Avatar size="lg" name="John Doe" />
          <Avatar size="xl" name="John Doe" />
          <Avatar size="2xl" name="John Doe" />
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Fallback Initials</h2>
        <div class={styles.demoRow}>
          <Avatar name="Alice Smith" />
          <Avatar name="Bob Johnson" />
          <Avatar name="Charlie" />
        </div>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>With Image</h2>
        <div class={styles.demoRow}>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name="Jane Doe" size="lg" />
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            name="John Smith"
            size="lg"
          />
        </div>
      </section>
    </>
  );
}
