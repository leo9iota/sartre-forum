import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colorVars } from '../../../styles/vars.css';

/**
 * MUI-style circular progress animations
 *
 * The magic is in combining two animations:
 * 1. circularRotate - Spins the entire SVG continuously
 * 2. circularDash - Animates stroke-dasharray/dashoffset for the "growing/shrinking" effect
 */

const SIZE = 44;

// Rotation animation for the root element
const circularRotate = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
});

// Dash animation for the circle stroke - creates the "growing/shrinking" tail effect
const circularDash = keyframes({
    '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0'
    },
    '50%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-15px'
    },
    '100%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '-126px'
    }
});

export const spinnerRoot = style({
    display: 'inline-block',
    animation: `${circularRotate} 1.4s linear infinite`
});

export const spinnerSvg = style({
    display: 'block'
});

export const spinnerCircle = style({
    stroke: 'currentColor',
    strokeLinecap: 'round',
    // Default for indeterminate
    strokeDasharray: '80px, 200px',
    strokeDashoffset: 0,
    animation: `${circularDash} 1.4s ease-in-out infinite`
});

// Size variants
export const sizeStyles = styleVariants({
    xs: { width: 16, height: 16 },
    sm: { width: 20, height: 20 },
    md: { width: 24, height: 24 },
    lg: { width: 32, height: 32 },
    xl: { width: 40, height: 40 }
});

// Color variants
export const colorStyles = styleVariants({
    primary: { color: colorVars.primary },
    accent: { color: colorVars.accent },
    foreground: { color: colorVars.foreground },
    muted: { color: colorVars.foregroundMuted },
    success: { color: colorVars.success },
    warning: { color: colorVars.warning },
    error: { color: colorVars.error },
    inherit: { color: 'inherit' }
});

// Recipe combining all variants
export const spinnerRecipe = recipe({
    base: spinnerRoot,
    variants: {
        size: sizeStyles,
        color: colorStyles
    },
    defaultVariants: {
        size: 'md',
        color: 'primary'
    }
});

// Export constants for use in component
export const SPINNER_SIZE = SIZE;
export const DEFAULT_THICKNESS = 3.6;
