import { keyframes, style, styleVariants } from '@vanilla-extract/css';

import { colorVars, staticVars } from '../../../styles/vars.css';

/**
 * Progress Component Styles
 * Supports both Linear (bar) and Circular progress indicators
 */

// =============================================================================
// SHARED STYLES
// =============================================================================

const baseRoot = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: staticVars.space[2]
};

export const progressLabel = style({
    fontSize: staticVars.fontSizes.sm,
    fontWeight: staticVars.fontWeights.medium,
    color: colorVars.foreground
});

export const progressValueText = style({
    fontSize: staticVars.fontSizes.sm,
    color: colorVars.foregroundMuted,
    fontVariantNumeric: 'tabular-nums'
});

// =============================================================================
// LINEAR PROGRESS (BAR)
// =============================================================================

// Indeterminate animation for linear progress
const linearIndeterminate = keyframes({
    '0%': {
        transform: 'translateX(-100%)'
    },
    '100%': {
        transform: 'translateX(400%)'
    }
});

export const progressBarRoot = style({
    ...baseRoot,
    width: '100%'
});

export const progressBarHeader = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

export const progressBarTrack = style({
    width: '100%',
    backgroundColor: colorVars.border,
    borderRadius: staticVars.radii.full,
    overflow: 'hidden'
});

// Base range style (no animation)
export const progressBarRange = style({
    height: '100%',
    backgroundColor: colorVars.primary,
    borderRadius: staticVars.radii.full,
    transition: `width 300ms ${staticVars.easings.easeOut}`,
    selectors: {
        // Static indeterminate - just show full width
        '[data-state="loading"] &': {
            width: '100%'
        }
    }
});

// Animated range style (slide animation for indeterminate)
export const progressBarRangeAnimated = style({
    selectors: {
        '[data-state="loading"] &': {
            width: '25%',
            animation: `${linearIndeterminate} 1.5s ${staticVars.easings.easeInOut} infinite`
        }
    }
});

// Track size variants
export const barTrackSizes = styleVariants({
    sm: { height: '4px' },
    md: { height: '8px' },
    lg: { height: '12px' }
});

// =============================================================================
// CIRCULAR PROGRESS
// =============================================================================

// Indeterminate animation for circular progress
const circularRotate = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
});

const circularDash = keyframes({
    '0%': {
        strokeDasharray: '1, 200',
        strokeDashoffset: '0'
    },
    '50%': {
        strokeDasharray: '89, 200',
        strokeDashoffset: '-35'
    },
    '100%': {
        strokeDasharray: '89, 200',
        strokeDashoffset: '-124'
    }
});

export const progressCircleRoot = style({
    ...baseRoot,
    alignItems: 'center',
    width: 'fit-content'
});

export const progressCircle = style({
    display: 'block',
    selectors: {
        '[data-state="loading"] &': {
            animation: `${circularRotate} 2s linear infinite`
        }
    }
});

export const progressCircleTrack = style({
    stroke: colorVars.border,
    opacity: 0.4
});

export const progressCircleRange = style({
    stroke: colorVars.primary,
    strokeLinecap: 'round',
    transition: `stroke-dashoffset 300ms ${staticVars.easings.easeOut}`,
    selectors: {
        '[data-state="loading"] &': {
            animation: `${circularDash} 1.5s ${staticVars.easings.easeInOut} infinite`
        }
    }
});

// Circle size variants - must set --size for Ark UI's SVG calculations
export const circleSizes = styleVariants({
    sm: {
        width: '32px',
        height: '32px',
        vars: { '--size': '32', '--thickness': '3' }
    },
    md: {
        width: '48px',
        height: '48px',
        vars: { '--size': '48', '--thickness': '4' }
    },
    lg: {
        width: '64px',
        height: '64px',
        vars: { '--size': '64', '--thickness': '5' }
    }
});

// =============================================================================
// COLOR VARIANTS (shared)
// =============================================================================

export const colorVariants = styleVariants({
    primary: { vars: { '--progress-color': colorVars.primary } },
    accent: { vars: { '--progress-color': colorVars.accent } },
    success: { vars: { '--progress-color': colorVars.success } },
    warning: { vars: { '--progress-color': colorVars.warning } },
    error: { vars: { '--progress-color': colorVars.error } }
});

// Override default color for range elements
export const progressBarRangeColored = style({
    backgroundColor: 'var(--progress-color)'
});

export const progressCircleRangeColored = style({
    stroke: 'var(--progress-color)'
});
