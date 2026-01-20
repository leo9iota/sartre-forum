import { splitProps } from 'solid-js';
import type { JSX } from 'solid-js';

import {
  colorStyles,
  DEFAULT_THICKNESS,
  sizeStyles,
  SPINNER_SIZE,
  spinnerCircle,
  spinnerRecipe,
  spinnerSvg
} from './spinner.css';

export type SpinnerSize = keyof typeof sizeStyles;
export type SpinnerColor = keyof typeof colorStyles;

export interface SpinnerProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  /** Size of the spinner */
  size?: SpinnerSize;
  /** Color of the spinner */
  color?: SpinnerColor;
  /** Thickness of the circle stroke (default: 3.6) */
  thickness?: number;
  /** Accessible label for screen readers */
  label?: string;
}

/**
 * Spinner component with MUI-style circular progress animation.
 *
 * Features the iconic "growing/shrinking tail" effect achieved through
 * two synchronized animations: rotation and stroke-dasharray manipulation.
 *
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner size="lg" color="accent" />
 * <Spinner thickness={4} label="Loading content..." />
 * ```
 */
export function Spinner(props: SpinnerProps) {
  const [local, rest] = splitProps(props, ['size', 'color', 'thickness', 'label', 'class']);

  const thickness = () => local.thickness ?? DEFAULT_THICKNESS;
  const radius = () => (SPINNER_SIZE - thickness()) / 2;

  return (
    <span
      class={`${spinnerRecipe({
        size: local.size,
        color: local.color
      })} ${local.class ?? ''}`}
      role='progressbar'
      aria-label={local.label ?? 'Loading'}
      {...rest}
    >
      <svg
        class={spinnerSvg}
        viewBox={`${SPINNER_SIZE / 2} ${SPINNER_SIZE / 2} ${SPINNER_SIZE} ${SPINNER_SIZE}`}
      >
        <circle
          class={spinnerCircle}
          cx={SPINNER_SIZE}
          cy={SPINNER_SIZE}
          r={radius()}
          fill='none'
          stroke-width={thickness()}
        />
      </svg>
    </span>
  );
}
