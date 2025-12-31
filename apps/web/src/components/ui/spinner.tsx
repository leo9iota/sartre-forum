'use client';

import { forwardRef } from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/cn';

const spinnerVariants = cva('relative inline-flex flex-col items-center justify-center gap-2', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: ''
    },
    color: {
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      danger: '',
      current: '',
      white: ''
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
});

const sizeConfig = {
  sm: { wrapper: 'h-5 w-5', border: 'border-2', dot: 'size-1', label: 'text-sm' },
  md: { wrapper: 'h-8 w-8', border: 'border-[3px]', dot: 'size-1.5', label: 'text-base' },
  lg: { wrapper: 'h-10 w-10', border: 'border-[3px]', dot: 'size-2', label: 'text-lg' }
};

const colorConfig = {
  primary: { border: 'border-b-primary', bg: 'bg-primary', text: 'text-primary' },
  secondary: { border: 'border-b-secondary', bg: 'bg-secondary', text: 'text-secondary' },
  success: { border: 'border-b-green-500', bg: 'bg-green-500', text: 'text-green-500' },
  warning: { border: 'border-b-yellow-500', bg: 'bg-yellow-500', text: 'text-yellow-500' },
  danger: { border: 'border-b-destructive', bg: 'bg-destructive', text: 'text-destructive' },
  current: { border: 'border-b-current', bg: 'bg-current', text: 'text-current' },
  white: { border: 'border-b-white', bg: 'bg-white', text: 'text-white' }
};

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  variant?: 'default' | 'gradient' | 'wave' | 'dots' | 'spinner' | 'simple';
  label?: string;
  className?: string;
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ variant = 'default', size = 'md', color = 'primary', label, className }, ref) => {
    const sizeClasses = sizeConfig[size!];
    const colorClasses = colorConfig[color!];

    if (variant === 'default') {
      return (
        <div
          ref={ref}
          role='status'
          aria-label={label ?? 'Loading'}
          className={cn(spinnerVariants({ size, color }), className)}
        >
          <div className={cn('relative flex', sizeClasses.wrapper)}>
            {/* Circle 1: Solid, ease spin */}
            <i
              className={cn(
                'absolute h-full w-full rounded-full',
                sizeClasses.border,
                'animate-[spinner-ease-spin_0.8s_ease_infinite]',
                'border-solid border-transparent',
                colorClasses.border
              )}
            />
            {/* Circle 2: Dotted, linear spin */}
            <i
              className={cn(
                'absolute h-full w-full rounded-full opacity-75',
                sizeClasses.border,
                'animate-[spinner-linear-spin_0.8s_linear_infinite]',
                'border-dotted border-transparent',
                colorClasses.border
              )}
            />
          </div>
          {label && <span className={cn('text-foreground', sizeClasses.label)}>{label}</span>}
        </div>
      );
    }

    if (variant === 'gradient') {
      return (
        <div
          ref={ref}
          role='status'
          aria-label={label ?? 'Loading'}
          className={cn(spinnerVariants({ size, color }), className)}
        >
          <div className={cn('relative flex', sizeClasses.wrapper)}>
            <i
              className={cn(
                'absolute h-full w-full rounded-full',
                'animate-[spinner-linear-spin_1s_linear_infinite]',
                'bg-linear-to-b from-transparent via-transparent',
                color === 'primary' && 'to-primary',
                color === 'secondary' && 'to-secondary',
                color === 'success' && 'to-green-500',
                color === 'warning' && 'to-yellow-500',
                color === 'danger' && 'to-destructive',
                color === 'current' && 'to-current',
                color === 'white' && 'to-white',
                '[mask:radial-gradient(closest-side,transparent_calc(100%-3px),black_calc(100%-3px))]'
              )}
            />
          </div>
          {label && <span className={cn('text-foreground', sizeClasses.label)}>{label}</span>}
        </div>
      );
    }

    if (variant === 'wave') {
      return (
        <div
          ref={ref}
          role='status'
          aria-label={label ?? 'Loading'}
          className={cn(spinnerVariants({ size, color }), className)}
        >
          <div className={cn('relative flex translate-y-3/4 gap-1', sizeClasses.wrapper)}>
            {[0, 1, 2].map(index => (
              <i
                key={index}
                className={cn(
                  'rounded-full',
                  sizeClasses.dot,
                  colorClasses.bg,
                  'animate-[spinner-wave_0.6s_ease-in-out_infinite]'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          {label && <span className={cn('text-foreground', sizeClasses.label)}>{label}</span>}
        </div>
      );
    }

    if (variant === 'dots') {
      return (
        <div
          ref={ref}
          role='status'
          aria-label={label ?? 'Loading'}
          className={cn(spinnerVariants({ size, color }), className)}
        >
          <div className={cn('relative flex translate-y-1/2 gap-1', sizeClasses.wrapper)}>
            {[0, 1, 2].map(index => (
              <i
                key={index}
                className={cn(
                  'rounded-full',
                  sizeClasses.dot,
                  colorClasses.bg,
                  'animate-[spinner-blink_1s_ease-in-out_infinite]'
                )}
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
          {label && <span className={cn('text-foreground', sizeClasses.label)}>{label}</span>}
        </div>
      );
    }

    if (variant === 'spinner') {
      return (
        <div
          ref={ref}
          role='status'
          aria-label={label ?? 'Loading'}
          className={cn(spinnerVariants({ size, color }), className)}
        >
          <div className={cn('relative', sizeClasses.wrapper)}>
            {[...Array(12)].map((_, index) => (
              <span
                key={index}
                className={cn(
                  'absolute top-0 left-1/2 h-[25%] w-[8%] -translate-x-1/2 rounded-full',
                  colorClasses.bg,
                  'animate-[spinner-bar-fade_1.2s_linear_infinite]'
                )}
                style={{
                  transform: `translateX(-50%) rotate(${index * 30}deg)`,
                  transformOrigin: 'center calc(100% + 70%)',
                  animationDelay: `${index * 0.1 - 1.2}s`
                }}
              />
            ))}
          </div>
          {label && <span className={cn('text-foreground', sizeClasses.label)}>{label}</span>}
        </div>
      );
    }

    if (variant === 'simple') {
      return (
        <div
          ref={ref}
          role='status'
          aria-label={label ?? 'Loading'}
          className={cn(spinnerVariants({ size, color }), className)}
        >
          <svg
            className={cn('animate-spin', colorClasses.text, sizeClasses.wrapper)}
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
          {label && <span className={cn('text-foreground', sizeClasses.label)}>{label}</span>}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role='status'
        aria-label={label ?? 'Loading'}
        className={cn(spinnerVariants({ size, color }), className)}
      >
        <div
          className={cn(
            'animate-spin rounded-full border-2 border-current border-t-transparent',
            sizeClasses.wrapper
          )}
        />
        {label && <span className={cn('text-foreground', sizeClasses.label)}>{label}</span>}
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants };
