import { splitProps } from 'solid-js';
import type { ComponentProps } from 'solid-js';

export interface InputProps extends ComponentProps<'input'> {
  class?: string;
}

export const Input = (props: InputProps) => {
  const [local, rest] = splitProps(props, ['class']);

  return <input class={local.class} {...rest} />;
};
