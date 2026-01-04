import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
    colors: {
        background: '#ffffff',
        foreground: '#09090b',
        primary: '#18181b', // zinc-950
        primaryForeground: '#fafafa', // zinc-50
        muted: '#f4f4f5', // zinc-100
        mutedForeground: '#71717a', // zinc-500
        accent: '#f4f4f5', // zinc-100
        accentForeground: '#18181b', // zinc-950
        border: '#e4e4e7' // zinc-200
    },
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
        16: '4rem'
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
        full: '9999px'
    }
});
