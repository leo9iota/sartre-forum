import { createEffect, Show } from 'solid-js';

import { useNavigate } from '@solidjs/router';

import { Button } from '@/components/ui/button';

import { authClient } from '@/lib/auth/auth-client';

import * as styles from './dashboard.css';

export default function DashboardPage() {
  const navigate = useNavigate();
  const session = authClient.useSession();

  // Redirect to login if not authenticated
  createEffect(() => {
    const sessionData = session();
    if (!sessionData.isPending && !sessionData.data) {
      navigate('/login');
    }
  });

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate('/login');
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
