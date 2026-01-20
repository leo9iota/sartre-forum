import { createSignal, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import type { Component } from 'solid-js';

import { GithubIcon, GoogleIcon } from '../../icons';
import { Spinner } from '../../ui/spinner';
import * as styles from './social-button.css';

type Provider = 'github' | 'google';

interface SocialButtonProps {
  provider: Provider;
  /** Callback when button is clicked - should trigger auth flow */
  onAuth?: (provider: Provider) => Promise<void>;
}

const providerConfig: Record<Provider, { label: string; Icon: Component<{ class?: string }> }> = {
  github: {
    label: 'GitHub',
    Icon: GithubIcon
  },
  google: {
    label: 'Google',
    Icon: GoogleIcon
  }
};

/**
 * Social login button component.
 * Note: Auth logic should be passed via onAuth prop for Astro compatibility.
 */
export const SocialButton = (props: SocialButtonProps) => {
  const [loading, setLoading] = createSignal(false);
  const config = () => providerConfig[props.provider];

  const handleClick = async () => {
    if (!props.onAuth) return;
    setLoading(true);
    await props.onAuth(props.provider);
    // Note: We don't setLoading(false) because the page will redirect
  };

  return (
    <button type='button' class={styles.socialButton} onClick={handleClick} disabled={loading()}>
      <Show when={loading()} fallback={<Dynamic component={config().Icon} class={styles.icon} />}>
        <Spinner size='sm' />
      </Show>
      <span>Continue with {config().label}</span>
    </button>
  );
};
