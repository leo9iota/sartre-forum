import { keyframes, style } from '@vanilla-extract/css';

export const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
});

export const fadeOut = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 }
});

export const scaleIn = keyframes({
    '0%': { opacity: 0, transform: 'scale(0.95)' },
    '100%': { opacity: 1, transform: 'scale(1)' }
});

export const scaleOut = keyframes({
    '0%': { opacity: 1, transform: 'scale(1)' },
    '100%': { opacity: 0, transform: 'scale(0.95)' }
});

export const slideInFromBottom = keyframes({
    '0%': { transform: 'translateY(100%)' },
    '100%': { transform: 'translateY(0)' }
});

export const slideInFromRight = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0)' }
});

export const animations = {
    fadeIn: style({ animation: `${fadeIn} 0.2s ease-out` }),
    fadeOut: style({ animation: `${fadeOut} 0.2s ease-in` }),
    scaleIn: style({ animation: `${scaleIn} 0.2s ease-out` }),
    scaleOut: style({ animation: `${scaleOut} 0.2s ease-in` }),
    slideInFromBottom: style({
        animation: `${slideInFromBottom} 0.3s cubic-bezier(0.16, 1, 0.3, 1)`
    }),
    slideInFromRight: style({ animation: `${slideInFromRight} 0.3s cubic-bezier(0.16, 1, 0.3, 1)` })
};
