import type { StyleRule } from '@vanilla-extract/css';

import { vars } from './vars.css';

/**
 * Focus ring utility for keyboard navigation
 * Apply to :focus-visible pseudo-selector
 */
export const focusRing = {
    outline: 'none',
    boxShadow: `
        0 0 6px 3px ${vars.colors.ringGlow},
        0 0 12px 6px color-mix(in srgb, ${vars.colors.ringGlow} 50%, transparent)
    `
} as const satisfies StyleRule;

/**
 * Visually hidden but accessible to screen readers
 * Use for labels, skip links, etc.
 */
export const visuallyHidden = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0
} as const satisfies StyleRule;

export const srOnly = visuallyHidden;

/**
 * Text truncation with ellipsis
 */
export const truncate = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
} as const satisfies StyleRule;

/**
 * Base styles for interactive elements
 */
export const interactive = {
    cursor: 'pointer',
    userSelect: 'none'
} as const satisfies StyleRule;

/**
 * Disabled state styling
 */
export const disabled = {
    opacity: 0.5,
    cursor: 'not-allowed',
    pointerEvents: 'none'
} as const satisfies StyleRule;
