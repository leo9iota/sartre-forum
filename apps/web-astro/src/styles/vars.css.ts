import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

/**
 * Static tokens that don't change with theme
 */
export const staticVars = createGlobalTheme(':root', {
    space: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem'
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem'
    },
    fontWeights: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
    },
    radii: {
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px'
    },
    fonts: {
        // Monospaced headings for that "spec document" feel
        heading: "'Space Mono', monospace",
        body: "'Inter', system-ui, sans-serif",
        mono: "'Space Mono', monospace"
    },
    transitions: {
        fast: '150ms',
        normal: '200ms',
        slow: '300ms'
    },
    easings: {
        default: 'ease',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
    },
    zIndices: {
        base: '0',
        dropdown: '1000',
        sticky: '1100',
        modal: '1300',
        popover: '1400',
        tooltip: '1500'
    },
    shadows: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        // New tokens
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none'
    }
});

/**
 * Color tokens that change with theme (light/dark)
 * These are defined as a contract and filled by theme classes
 */
export const colorVars = createThemeContract({
    background: null,
    backgroundAlt: null,
    foreground: null,
    foregroundMuted: null,
    primary: null,
    primaryHover: null,
    accent: null,
    border: null,
    borderStrong: null,
    // Semantic state colors
    error: null,
    errorMuted: null,
    success: null,
    successMuted: null,
    warning: null,
    warningMuted: null,
    // UI-specific
    ring: null,
    ringGlow: null,
    overlay: null,
    ghostHover: null
});

/**
 * Convenience export combining static and themeable tokens
 * Use this throughout the app for consistent access
 */
export const vars = {
    ...staticVars,
    colors: colorVars
};
