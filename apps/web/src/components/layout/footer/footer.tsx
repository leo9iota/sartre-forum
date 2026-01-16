import * as styles from './footer.css';

export function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <p class={styles.copyright}>© 2026 Sartre Blog</p>
        <nav class={styles.nav}>
          <a href='/' class={styles.navLink}>
            Home
          </a>
          <a href='/about' class={styles.navLink}>
            About
          </a>
          <a href='/design' class={styles.navLink}>
            Design System
          </a>
        </nav>
      </div>
    </footer>
  );
}
