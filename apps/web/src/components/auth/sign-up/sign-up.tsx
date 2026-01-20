import { createSignal } from 'solid-js';

import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { SocialButton } from '../social-button';
import * as styles from './sign-up.css';

export interface SignUpProps {
  /** Callback when email/password sign up is submitted */
  onSubmit?: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  /** Callback for social auth */
  onSocialAuth?: (provider: 'github' | 'google') => Promise<void>;
}

/**
 * Sign up form component.
 * Note: Auth logic should be passed via props for Astro compatibility.
 */
export const SignUp = (props: SignUpProps) => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  const [loading, setLoading] = createSignal(false);

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    if (props.onSubmit) {
      const result = await props.onSubmit(name(), email(), password());
      setLoading(false);
      if (result.error) {
        setError(result.error);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div class={styles.authContainer}>
      <div class={styles.authCard}>
        <h1 class={styles.authTitle}>Create account</h1>
        <p class={styles.authSubtitle}>Get started with Sartre</p>

        <form class={styles.authForm} onSubmit={handleSubmit}>
          <div class={styles.formGroup}>
            <label class={styles.label} for='name'>
              Name
            </label>
            <Input
              id='name'
              type='text'
              placeholder='Your name'
              value={name()}
              onInput={e => setName(e.currentTarget.value)}
              required
            />
          </div>

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
              minLength={8}
              required
            />
          </div>

          {error() && <p class={styles.errorText}>{error()}</p>}

          <Button type='submit' variant='solid' loading={loading()}>
            Create Account
          </Button>
        </form>

        <div class={styles.divider}>
          <span>or continue with</span>
        </div>

        <div class={styles.socialButtons}>
          <SocialButton provider='github' onAuth={props.onSocialAuth} />
          <SocialButton provider='google' onAuth={props.onSocialAuth} />
        </div>

        <div class={styles.footerText}>
          Already have an account?{' '}
          <a href='/sign-in' class={styles.footerLink}>
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};
