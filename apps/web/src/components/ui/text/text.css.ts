import { recipe } from '@vanilla-extract/recipes';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/vars.css';

export const textRecipe = recipe({
    base: {
        margin: 0 // we keep margins zero and use layout components for spacing
    },

    variants: {
        variant: {
            // Headings, use the heading font
            h1: {
                fontFamily: vars.fonts.heading,
                fontSize: vars.fontSizes['4xl'],
                fontWeight: vars.fontWeights.bold,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: vars.colors.foreground
            },
            h2: {
                fontFamily: vars.fonts.heading,
                fontSize: vars.fontSizes['3xl'],
                fontWeight: vars.fontWeights.bold,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                color: vars.colors.foreground
            },
            h3: {
                fontFamily: vars.fonts.heading,
                fontSize: vars.fontSizes['2xl'],
                fontWeight: vars.fontWeights.semibold,
                lineHeight: 1.3,
                color: vars.colors.foreground
            },
            h4: {
                fontFamily: vars.fonts.heading,
                fontSize: vars.fontSizes.xl,
                fontWeight: vars.fontWeights.semibold,
                lineHeight: 1.4,
                color: vars.colors.foreground
            },
            h5: {
                fontFamily: vars.fonts.heading,
                fontSize: vars.fontSizes.lg,
                fontWeight: vars.fontWeights.medium,
                lineHeight: 1.4,
                color: vars.colors.foreground
            },
            h6: {
                fontFamily: vars.fonts.heading,
                fontSize: vars.fontSizes.base,
                fontWeight: vars.fontWeights.medium,
                lineHeight: 1.5,
                color: vars.colors.foreground
            },
            // Body text variants
            body: {
                fontFamily: vars.fonts.body,
                fontSize: vars.fontSizes.base,
                fontWeight: vars.fontWeights.normal,
                lineHeight: 1.6,
                color: vars.colors.foreground
            },
            'body-lg': {
                fontFamily: vars.fonts.body,
                fontSize: vars.fontSizes.lg,
                fontWeight: vars.fontWeights.normal,
                lineHeight: 1.6,
                color: vars.colors.foreground
            },
            'body-sm': {
                fontFamily: vars.fonts.body,
                fontSize: vars.fontSizes.sm,
                fontWeight: vars.fontWeights.normal,
                lineHeight: 1.5,
                color: vars.colors.foreground
            },
            // Supporting text variants
            lead: {
                fontFamily: vars.fonts.body,
                fontSize: vars.fontSizes.xl,
                fontWeight: vars.fontWeights.normal,
                lineHeight: 1.7,
                color: vars.colors.foregroundMuted
            },
            caption: {
                fontFamily: vars.fonts.body,
                fontSize: vars.fontSizes.xs,
                fontWeight: vars.fontWeights.normal,
                lineHeight: 1.4,
                color: vars.colors.foregroundMuted
            },
            label: {
                fontFamily: vars.fonts.body,
                fontSize: vars.fontSizes.sm,
                fontWeight: vars.fontWeights.medium,
                lineHeight: 1.4,
                color: vars.colors.foreground
            },
            code: {
                fontFamily: vars.fonts.mono,
                fontSize: vars.fontSizes.sm,
                fontWeight: vars.fontWeights.normal,
                lineHeight: 1.5,
                color: vars.colors.foreground
            }
        },

        // Color modifier
        color: {
            default: {},
            muted: { color: vars.colors.foregroundMuted },
            primary: { color: vars.colors.primary },
            accent: { color: vars.colors.accent }
        },

        // Weight override
        weight: {
            normal: { fontWeight: vars.fontWeights.normal },
            medium: { fontWeight: vars.fontWeights.medium },
            semibold: { fontWeight: vars.fontWeights.semibold },
            bold: { fontWeight: vars.fontWeights.bold }
        },

        // Alignment
        align: {
            left: { textAlign: 'left' },
            center: { textAlign: 'center' },
            right: { textAlign: 'right' }
        },

        // Truncation
        truncate: {
            true: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }
        }
    },

    defaultVariants: {
        variant: 'body',
        color: 'default'
    }
});

export type TextVariants = RecipeVariants<typeof textRecipe>;
