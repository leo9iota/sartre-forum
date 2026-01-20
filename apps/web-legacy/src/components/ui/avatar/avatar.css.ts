import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/vars.css';

export const avatarRecipe = recipe({
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        overflow: 'hidden',
        userSelect: 'none',
        borderRadius: '50%',
        backgroundColor: vars.colors.backgroundAlt,
        border: `1px solid ${vars.colors.border}`,
        position: 'relative',
        flexShrink: 0
    },
    variants: {
        size: {
            xs: {
                width: '1.5rem',
                height: '1.5rem',
                fontSize: vars.fontSizes.xs
            },
            sm: {
                width: '2rem',
                height: '2rem',
                fontSize: vars.fontSizes.xs
            },
            md: {
                width: '2.5rem',
                height: '2.5rem',
                fontSize: vars.fontSizes.sm
            },
            lg: {
                width: '3rem',
                height: '3rem',
                fontSize: vars.fontSizes.base
            },
            xl: {
                width: '4rem',
                height: '4rem',
                fontSize: vars.fontSizes.lg
            },
            '2xl': {
                width: '5rem',
                height: '5rem',
                fontSize: vars.fontSizes.xl
            }
        }
    },
    defaultVariants: {
        size: 'md'
    }
});

export const image = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit'
});

export const fallback = style({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.colors.backgroundAlt,
    color: vars.colors.foregroundMuted,
    fontWeight: vars.fontWeights.medium
});
