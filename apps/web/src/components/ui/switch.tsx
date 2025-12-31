'use client';

import { forwardRef, useState } from 'react';
import type { ComponentPropsWithoutRef, ComponentRef } from 'react';

import { Root, Thumb } from '@radix-ui/react-switch';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils/cn';

const Switch = forwardRef<ComponentRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
      <Root
        className={cn(
          // Layout & sizing
          'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center',
          // Background & borders
          'rounded-full border-2 border-transparent',
          // Effects & transitions
          'shadow-sm transition-colors outline-none',
          // Focus state
          'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          // Disabled state
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Checked & unchecked state
          'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
          // Alignment
          'justify-start data-[state=checked]:justify-end',
          className
        )}
        {...props}
        ref={ref}
        onPointerDown={() => setIsPressed(true)}
        onPointerLeave={() => setIsPressed(false)}
        onPointerUp={() => setIsPressed(false)}
      >
        <Thumb asChild>
          <motion.span
            layout
            animate={{
              width: isPressed ? '24px' : '20px'
            }}
            className={cn(
              'pointer-events-none block h-5 rounded-full bg-background shadow-lg ring-0'
            )}
            transition={{
              type: 'spring',
              stiffness: 700,
              damping: 50,
              mass: 1
            }}
          />
        </Thumb>
      </Root>
    );
  }
);

Switch.displayName = Root.displayName;

export { Switch };
