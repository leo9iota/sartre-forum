import { Show } from 'solid-js';

import { Button } from '../../ui/button/button';
import * as styles from './header.css';

export interface HeaderProps {
  /** Whether the user is currently authenticated */
  isAuthenticated?: boolean;
  /** Callback for sign out action */
  onSignOut?: () => void;
}

/**
 * Header component for site navigation.
 * Note: Authentication state should be passed as props in Astro.
 */
export function Header(props: HeaderProps) {
  return (
    <header class={styles.header}>
      <div class={styles.container}>
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
        <div class={styles.spacer} />
        <div class={styles.actions}>
          <Show
            when={props.isAuthenticated}
            fallback={
              <>
                <a href='/sign-in'>
                  <Button variant='ghost' size='sm'>
                    Sign In
                  </Button>
                </a>
                <a href='/sign-up'>
                  <Button variant='solid' size='sm'>
                    Sign Up
                  </Button>
                </a>
              </>
            }
          >
            <Button variant='ghost' size='sm' onClick={props.onSignOut}>
              Sign Out
            </Button>
          </Show>
        </div>
      </div>
    </header>
  );
}
