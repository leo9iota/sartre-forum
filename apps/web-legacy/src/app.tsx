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
import { Footer } from './components/layout/footer';
import { Header } from './components/layout/header';

/**
 * Inner app content that has access to theme context
 */
function AppContent(props: { children: JSX.Element }) {
  const { theme } = useTheme();

  return (
    <div class={`${theme() === 'dark' ? darkTheme : lightTheme} ${styles.themeWrapper}`}>
      <Header />
      <main class={styles.mainContent}>
        <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
      </main>
      <Footer />
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
