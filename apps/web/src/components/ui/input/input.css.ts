import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { focusRing } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

export const inputRecipe = recipe({
    base: {
        width: '100%',
        borderRadius: vars.radii.md,
        border: `1px solid ${vars.colors.border}`,
        backgroundColor: vars.colors.background,
        color: vars.colors.foreground,
        fontFamily: vars.fonts.body,
        outline: 'none',
        transition: `all ${vars.transitions.fast} ${vars.easings.default}`,
        selectors: {
            '&:focus-visible': {
                borderColor: vars.colors.borderStrong,
                ...focusRing
            },
            '&:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed',
                backgroundColor: vars.colors.backgroundAlt
            },
            '&::placeholder': {
                color: vars.colors.foregroundMuted
            }
        }
    },
    variants: {
        size: {
            sm: {
                height: '2rem',
                padding: '0 0.5rem',
                fontSize: vars.fontSizes.xs
            },
            md: {
                height: '2.5rem',
                padding: '0 0.75rem',
                fontSize: vars.fontSizes.sm
            },
            lg: {
                height: '3rem',
                padding: '0 1rem',
                fontSize: vars.fontSizes.base
            }
        }
    },
    defaultVariants: {
        size: 'md'
    }
});

export type InputVariants = RecipeVariants<typeof inputRecipe>;
