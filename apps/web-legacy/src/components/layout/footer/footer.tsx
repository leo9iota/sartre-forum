import { ThemeSwitch } from '@/components/ui/theme-switch';

import * as styles from './footer.css';

export function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <p class={styles.copyright}>© 2026 Sartre Blog</p>
        <ThemeSwitch />
      </div>
    </footer>
  );
}
