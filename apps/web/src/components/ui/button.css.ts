import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/vars.css';

export const buttonRecipe = recipe({
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vars.radii.md,
        fontSize: vars.fontSizes.sm,
        fontWeight: vars.fontWeights.medium,
        cursor: 'pointer',
        transition: 'all 0.2s',
        border: '1px solid transparent',
        selectors: {
            '&:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed'
            }
        }
    },
    variants: {
        variant: {
            solid: {
                backgroundColor: vars.colors.primary,
                color: vars.colors.primaryForeground,
                ':hover': {
                    opacity: 0.9
                }
            },
            outline: {
                borderColor: vars.colors.border,
                backgroundColor: 'transparent',
                ':hover': {
                    backgroundColor: vars.colors.accent,
                    color: vars.colors.accentForeground
                }
            },
            ghost: {
                backgroundColor: 'transparent',
                ':hover': {
                    backgroundColor: vars.colors.accent,
                    color: vars.colors.accentForeground
                }
            },
            link: {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
                color: vars.colors.primary,
                ':hover': {
                    textDecoration: 'none'
                }
            }
        },
        size: {
            xs: {
                height: '1.5rem', // 6
                padding: '0 0.5rem',
                fontSize: vars.fontSizes.xs
            },
            sm: {
                height: '2rem', // 8
                padding: '0 0.75rem',
                fontSize: vars.fontSizes.xs
            },
            md: {
                height: '2.5rem', // 10
                padding: '0 1rem',
                fontSize: vars.fontSizes.sm
            },
            lg: {
                height: '2.75rem', // 11
                padding: '0 2rem',
                fontSize: vars.fontSizes.base
            },
            xl: {
                height: '3rem', // 12
                padding: '0 2.5rem',
                fontSize: vars.fontSizes.base
            },
            '2xl': {
                height: '3.5rem', // 14
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
