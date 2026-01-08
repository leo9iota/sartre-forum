import { splitProps } from 'solid-js';
import type { ComponentProps } from 'solid-js';

export interface HeaderProps extends ComponentProps<'header'> {
  class?: string;
}

export const Header = (props: HeaderProps) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <header class={local.class} {...rest}>
      {local.children}
    </header>
  );
};
