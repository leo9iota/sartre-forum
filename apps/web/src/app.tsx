import { Suspense } from 'solid-js';

import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';

import './app.css';

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <nav>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
