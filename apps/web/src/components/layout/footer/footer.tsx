import { ThemeSwitch } from '../../ui/theme-switch';
import * as styles from './footer.css';

export interface FooterProps {
  /** Current theme */
  theme?: 'light' | 'dark';
  /** Callback when theme changes */
  onThemeChange?: () => void;
}

/**
 * Footer component with copyright and theme switch.
 */
export function Footer(props: FooterProps) {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <p class={styles.copyright}>© 2026 Sartre Blog</p>
        <ThemeSwitch theme={props.theme} onThemeChange={props.onThemeChange} />
      </div>
    </footer>
  );
}
