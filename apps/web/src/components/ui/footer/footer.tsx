import { splitProps } from 'solid-js';
import type { ComponentProps } from 'solid-js';

export interface FooterProps extends ComponentProps<'footer'> {
  class?: string;
}

export const Footer = (props: FooterProps) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <footer class={local.class} {...rest}>
      {local.children}
    </footer>
  );
};
