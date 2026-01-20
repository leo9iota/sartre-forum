import { createSignal, For, splitProps } from 'solid-js';
import type { ComponentProps } from 'solid-js';

import { buttonRecipe, ripple } from './button.css';

// Define the primitive props
export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  loading?: boolean;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  key: number;
}

export const Button = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, [
    'variant',
    'size',
    'loading',
    'class',
    'children',
    'onPointerDown'
  ]);
  const [ripples, setRipples] = createSignal<Ripple[]>([]);

  const handlePointerDown = (e: PointerEvent) => {
    const button = e.currentTarget as HTMLButtonElement;
    const rect = button.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;
    const size = Math.max(width, height) * 2;

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, key: Date.now() + Math.random() };

    setRipples(prev => [...prev, newRipple]);

    // Clean up ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.key !== newRipple.key));
    }, 600);

    // Call original handler if it exists
    if (typeof local.onPointerDown === 'function') {
      (local.onPointerDown as (e: PointerEvent) => void)(e);
    }
  };

  return (
    <button
      class={`${buttonRecipe({ variant: local.variant, size: local.size })} ${local.class ?? ''}`}
      disabled={local.loading || rest.disabled}
      onPointerDown={handlePointerDown}
      {...rest}
    >
      {local.loading ? 'Loading...' : local.children}
      <For each={ripples()}>
        {r => (
          <span
            class={ripple}
            style={{
              left: `${r.x}px`,
              top: `${r.y}px`,
              width: `${r.size}px`,
              height: `${r.size}px`
            }}
          />
        )}
      </For>
    </button>
  );
};
