import { splitProps } from 'solid-js';
import type { ComponentProps } from 'solid-js';

import { buttonRecipe } from './button.css';

// Define the primitive props
export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, ['variant', 'size', 'loading', 'class', 'children']);

  return (
    <button
      class={`${buttonRecipe({ variant: local.variant, size: local.size })} ${local.class ?? ''}`}
      disabled={local.loading || rest.disabled}
      {...rest}
    >
      {local.loading ? 'Loading...' : local.children}
    </button>
  );
};
