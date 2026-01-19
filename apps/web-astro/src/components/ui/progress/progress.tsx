import { splitProps } from 'solid-js';

import { Progress } from '@ark-ui/solid/progress';

import * as styles from './progress.css';

// =============================================================================
// TYPES
// =============================================================================

type Size = 'sm' | 'md' | 'lg';
type Color = 'primary' | 'accent' | 'success' | 'warning' | 'error';

interface BaseProgressProps extends Omit<Progress.RootProps, 'children'> {
  /** Size variant */
  size?: Size;
  /** Color variant */
  color?: Color;
  /** Show the percentage value text */
  showValue?: boolean;
  /** Optional label */
  label?: string;
  /** Additional class name */
  class?: string;
}

export interface ProgressBarProps extends BaseProgressProps {
  /** Animation style for indeterminate state: 'slide' (animated) or 'none' (static) */
  animation?: 'slide' | 'none';
}

export interface ProgressCircleProps extends BaseProgressProps {
  /** Stroke thickness (default: 4) */
  thickness?: number;
}

// =============================================================================
// PROGRESS BAR (LINEAR)
// =============================================================================

/**
 * Linear progress bar using Ark UI primitives.
 *
 * @example
 * ```tsx
 * <ProgressBar value={50} />
 * <ProgressBar value={null} label="Loading..." /> // Indeterminate
 * <ProgressBar value={75} size="lg" color="success" showValue />
 * ```
 */
export function ProgressBar(props: ProgressBarProps) {
  const [local, rest] = splitProps(props, [
    'size',
    'color',
    'showValue',
    'label',
    'animation',
    'class'
  ]);

  const size = () => local.size ?? 'md';
  const color = () => local.color ?? 'primary';
  const animation = () => local.animation ?? 'slide';

  return (
    <Progress.Root
      class={`${styles.progressBarRoot} ${styles.colorVariants[color()]} ${local.class ?? ''}`}
      {...rest}
    >
      {(local.label || local.showValue) && (
        <div class={styles.progressBarHeader}>
          {local.label && (
            <Progress.Label class={styles.progressLabel}>{local.label}</Progress.Label>
          )}
          {local.showValue && <Progress.ValueText class={styles.progressValueText} />}
        </div>
      )}
      <Progress.Track class={`${styles.progressBarTrack} ${styles.barTrackSizes[size()]}`}>
        <Progress.Range
          class={`${styles.progressBarRange} ${styles.progressBarRangeColored} ${animation() === 'slide' ? styles.progressBarRangeAnimated : ''}`}
        />
      </Progress.Track>
    </Progress.Root>
  );
}

// =============================================================================
// PROGRESS CIRCLE (CIRCULAR)
// =============================================================================

/**
 * Circular progress indicator using Ark UI primitives.
 *
 * @example
 * ```tsx
 * <ProgressCircle value={50} />
 * <ProgressCircle value={null} /> // Indeterminate
 * <ProgressCircle value={75} size="lg" color="accent" showValue />
 * ```
 */
export function ProgressCircle(props: ProgressCircleProps) {
  const [local, rest] = splitProps(props, [
    'size',
    'color',
    'showValue',
    'label',
    'thickness',
    'class'
  ]);

  const size = () => local.size ?? 'md';
  const color = () => local.color ?? 'primary';
  const thickness = () => local.thickness ?? 4;

  return (
    <Progress.Root
      class={`${styles.progressCircleRoot} ${styles.colorVariants[color()]} ${local.class ?? ''}`}
      {...rest}
    >
      {local.label && <Progress.Label class={styles.progressLabel}>{local.label}</Progress.Label>}
      <Progress.Circle class={`${styles.progressCircle} ${styles.circleSizes[size()]}`}>
        <Progress.CircleTrack class={styles.progressCircleTrack} stroke-width={thickness()} />
        <Progress.CircleRange
          class={`${styles.progressCircleRange} ${styles.progressCircleRangeColored}`}
          stroke-width={thickness()}
        />
      </Progress.Circle>
      {local.showValue && <Progress.ValueText class={styles.progressValueText} />}
    </Progress.Root>
  );
}
