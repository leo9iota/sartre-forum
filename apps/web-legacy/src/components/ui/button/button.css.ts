import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusRing } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

const rippleKeyframes = keyframes({
    '0%': {
        transform: 'scale(0)',
        opacity: 0.35
    },
    '100%': {
        transform: 'scale(2)',
        opacity: 0
    }
});

export const ripple = style({
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    pointerEvents: 'none',
    transform: 'scale(0)',
    animation: `${rippleKeyframes} 600ms linear`
});

export const buttonRecipe = recipe({
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vars.radii.md,
        fontFamily: vars.fonts.body,
        fontSize: vars.fontSizes.sm,
        fontWeight: vars.fontWeights.medium,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: `all ${vars.transitions.fast} ${vars.easings.default}`,
        border: '1px solid transparent',
        selectors: {
            '&:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed'
            },
            '&:focus-visible': {
                ...focusRing
            }
        }
    },
    variants: {
        variant: {
            solid: {
                backgroundColor: vars.colors.primary,
                color: vars.colors.background,
                ':hover': {
                    backgroundColor: vars.colors.primaryHover
                }
            },
            outline: {
                borderColor: vars.colors.border,
                backgroundColor: 'transparent',
                color: vars.colors.foreground,
                ':hover': {
                    backgroundColor: vars.colors.backgroundAlt,
                    borderColor: vars.colors.borderStrong
                }
            },
            ghost: {
                backgroundColor: 'transparent',
                color: vars.colors.foreground,
                ':hover': {
                    backgroundColor: vars.colors.ghostHover
                }
            },
            link: {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
                color: vars.colors.primary,
                ':hover': {
                    color: vars.colors.primaryHover,
                    textDecoration: 'none'
                }
            }
        },
        size: {
            xs: {
                height: '1.5rem',
                padding: '0 0.5rem',
                fontSize: vars.fontSizes.xs
            },
            sm: {
                height: '2rem',
                padding: '0 0.75rem',
                fontSize: vars.fontSizes.xs
            },
            md: {
                height: '2.5rem',
                padding: '0 1rem',
                fontSize: vars.fontSizes.sm
            },
            lg: {
                height: '2.75rem',
                padding: '0 2rem',
                fontSize: vars.fontSizes.base
            },
            xl: {
                height: '3rem',
                padding: '0 2.5rem',
                fontSize: vars.fontSizes.base
            },
            '2xl': {
                height: '3.5rem',
                padding: '0 3rem',
                fontSize: vars.fontSizes.lg
            }
        }
    },
    defaultVariants: {
        variant: 'solid',
        size: 'md'
    }
});
