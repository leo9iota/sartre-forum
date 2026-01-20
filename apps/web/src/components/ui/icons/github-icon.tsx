import { splitProps } from 'solid-js';
import type { Component, JSX } from 'solid-js';

interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  class?: string;
  size?: number | string;
}

export const GithubIcon: Component<IconProps> = props => {
  const [local, others] = splitProps(props, ['class', 'size']);
  const size = () => local.size ?? 24;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size()}
      height={size()}
      viewBox='-2 -250 516 506'
      fill='currentColor'
      class={local.class}
      {...others}
    >
      <path d='M174 149c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3s6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2c1-2-1-4-4-5s-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zm66-383C114-240 8-135 8 4c0 111 70 206 170 239 12 3 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 25 2 38 26 22 38 59 27 73 21 2-16 9-27 16-34C155 95 99 87 99-10c0-27 7-41 23-58-2-7-11-34 3-68 21-7 69 27 69 27 20-6 42-9 63-9s43 3 63 9c0 0 48-34 69-27 13 34 5 61 2 68 16 17 26 31 26 58 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12C436 210 504 115 504 4c0-139-112-244-251-244zM105 105c-1 1-1 3 1 5s4 2 5 1 1-3-1-5c-1-2-3-2-5-1zm-11-8c0 1 1 3 3 4 1 1 3 0 4-1s0-3-2-4c-2 0-4 0-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14c-1 1-1 3 0 6 2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z' />
    </svg>
  );
};
