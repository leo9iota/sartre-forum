import { Show } from 'solid-js';

import { Button } from '@/components/ui/button/button';

import { authClient } from '@/lib/auth/auth-client';

import * as styles from './header.css';

export function Header() {
  const session = authClient.useSession();
  console.log('Session State:', session());

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = '/sign-in';
        }
      }
    });
  };

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
            when={session()?.data}
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
            <Button variant='ghost' size='sm' onClick={handleSignOut}>
              Sign Out
            </Button>
          </Show>
        </div>
      </div>
    </header>
  );
}
