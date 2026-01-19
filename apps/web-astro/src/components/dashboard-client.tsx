import { createEffect, Show } from 'solid-js';

import { Button } from '@/components/ui/button';

import { authClient } from '@/lib/auth/auth-client';

import * as styles from '@/pages/dashboard.css';

export function DashboardClient() {
  const session = authClient.useSession();

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
    <Show
      when={!session().isPending && session().data}
      fallback={<div class={styles.loading}>Loading...</div>}
    >
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>Dashboard</h1>
          <Button variant='outline' onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>

        <div class={styles.card}>
          <h2 class={styles.cardTitle}>Welcome back!</h2>
          <p class={styles.cardText}>
            You're signed in as <strong>{session().data?.user?.email}</strong>
          </p>
          <p class={styles.cardText}>Name: {session().data?.user?.name}</p>
        </div>
      </div>
    </Show>
  );
}
