import { Suspense } from 'solid-js';
import type { JSX } from 'solid-js';

import { MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';

import { ThemeProvider, useTheme } from './lib/theme/theme-context';
import { darkTheme, lightTheme } from './styles/theme.css';

import './styles/reset.css'; // Preflight/Reset
import './styles/global.css'; // Import global styles

import * as styles from './app.css';
import { ThemeSwitch } from './components/ui/theme-switch';

/**
 * Inner app content that has access to theme context
 */
function AppContent(props: { children: JSX.Element }) {
  const { theme } = useTheme();

  return (
    <div class={`${theme() === 'dark' ? darkTheme : lightTheme} ${styles.themeWrapper}`}>
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
        <div class={styles.navSpacer} />
        <ThemeSwitch />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
    </div>
  );
}

export default function App() {
  return (
    <MetaProvider>
      <ThemeProvider>
        <Router root={props => <AppContent>{props.children}</AppContent>}>
          <FileRoutes />
        </Router>
      </ThemeProvider>
    </MetaProvider>
  );
}
