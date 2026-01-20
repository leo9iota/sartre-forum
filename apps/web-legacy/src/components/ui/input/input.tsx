import { splitProps } from 'solid-js';
import type { ComponentProps } from 'solid-js';

import { inputRecipe } from './input.css';
import type { InputVariants } from './input.css';

export type InputProps = ComponentProps<'input'> &
  InputVariants & {
    class?: string;
    error?: boolean;
  };

export const Input = (props: InputProps) => {
  const [local, variantProps, rest] = splitProps(props, ['class', 'error'], ['size']);

  return <input class={`${inputRecipe(variantProps)} ${local.class ?? ''}`} {...rest} />;
};
