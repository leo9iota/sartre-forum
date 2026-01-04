import { Suspense } from 'solid-js';

import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';

import './styles/global.css'; // Import global styles

import * as styles from './app.css';

export default function App() {
  return (
    <Router
      root={props => (
        <>
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
          <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
