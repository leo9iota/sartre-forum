import { splitProps } from 'solid-js';
import type { Component, JSX } from 'solid-js';

interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  class?: string;
  size?: number | string;
}

export const GoogleIcon: Component<IconProps> = props => {
  const [local, others] = splitProps(props, ['class', 'size']);
  const size = () => local.size ?? 24;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size()}
      height={size()}
      viewBox='2 -250 508 516'
      fill='currentColor'
      class={local.class}
      {...others}
    >
      <path d='M500 14c0 141-97 242-240 242C123 256 12 145 12 8s111-248 248-248c67 0 123 25 166 65l-67 65c-88-85-253-21-253 118 0 87 69 157 154 157 98 0 135-71 141-107H260v-86h236c2 13 4 25 4 42z' />
    </svg>
  );
};
