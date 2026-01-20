import { createSignal } from 'solid-js';

import { A, useNavigate } from '@solidjs/router';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SocialButton } from '@/components/auth/social-button';

import { authClient } from '@/lib/auth/auth-client';

import * as styles from './sign-in.css';

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  const [loading, setLoading] = createSignal(false);

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    const { error: authError } = await authClient.signIn.email({
      email: email(),
      password: password(),
      callbackURL: '/'
    });

    setLoading(false);

    if (authError) {
      setError(authError.message || 'Failed to sign in');
    } else {
      navigate('/');
    }
  };

  return (
    <div class={styles.authContainer}>
      <div class={styles.authCard}>
        <h1 class={styles.authTitle}>Welcome back</h1>
        <p class={styles.authSubtitle}>Sign in to your account</p>

        <form class={styles.authForm} onSubmit={handleSubmit}>
          <div class={styles.formGroup}>
            <label class={styles.label} for='email'>
              Email
            </label>
            <Input
              id='email'
              type='email'
              placeholder='you@example.com'
              value={email()}
              onInput={e => setEmail(e.currentTarget.value)}
              required
            />
          </div>

          <div class={styles.formGroup}>
            <label class={styles.label} for='password'>
              Password
            </label>
            <Input
              id='password'
              type='password'
              placeholder='••••••••'
              value={password()}
              onInput={e => setPassword(e.currentTarget.value)}
              required
            />
          </div>

          {error() && <p class={styles.errorText}>{error()}</p>}

          <Button type='submit' variant='solid' loading={loading()}>
            Sign In
          </Button>
        </form>

        <div class={styles.divider}>
          <span>or continue with</span>
        </div>

        <div class={styles.socialButtons}>
          <SocialButton provider='github' />
          <SocialButton provider='google' />
        </div>

        <div class={styles.footerText}>
          Don't have an account?{' '}
          <A href='/sign-up' class={styles.footerLink}>
            Sign up
          </A>
        </div>
      </div>
    </div>
  );
};
