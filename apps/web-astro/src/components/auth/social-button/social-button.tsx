import { createSignal, Show } from 'solid-js';
import type { Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { GithubIcon } from '@/components/icons/github-icon';
import { GoogleIcon } from '@/components/icons/google-icon';
import { Spinner } from '@/components/ui/spinner';
import { authClient } from '@/lib/auth/auth-client';

import * as styles from './social-button.css';

type Provider = 'github' | 'google';

interface SocialButtonProps {
  provider: Provider;
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

export const SocialButton = (props: SocialButtonProps) => {
  const [loading, setLoading] = createSignal(false);
  const config = () => providerConfig[props.provider];

  const handleClick = async () => {
    setLoading(true);
    await authClient.signIn.social({
      provider: props.provider,
      callbackURL: '/'
    });
    // Note: We don't setLoading(false) because the page will redirect
  };

  return (
    <button type="button" class={styles.socialButton} onClick={handleClick} disabled={loading()}>
      <Show when={loading()} fallback={<Dynamic component={config().Icon} class={styles.icon} />}>
        <Spinner size="sm" />
      </Show>
      <span>Continue with {config().label}</span>
    </button>
  );
};
