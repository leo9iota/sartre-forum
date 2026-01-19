import { style } from '@vanilla-extract/css';

import { vars } from '../../../styles/vars.css';

export const content = style({
    background: vars.colors.background,
    borderRadius: vars.radii.md,
    border: `1px solid ${vars.colors.border}`,
    boxShadow: vars.shadows.lg,
    padding: vars.space[1],
    width: '12rem',
    zIndex: vars.zIndices.dropdown,
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[1],
    overflow: 'hidden',
    transformOrigin: 'var(--transform-origin)',
    animationDuration: vars.transitions.fast,
    selectors: {
        '&[data-state="open"]': {
            animationName: 'fadeIn'
        },
        '&[data-state="closed"]': {
            animationName: 'fadeOut'
        }
    }
});

export const item = style({
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${vars.space[2]} ${vars.space[2]}`,
    borderRadius: vars.radii.sm,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.foreground,
    cursor: 'pointer',
    transition: `background ${vars.transitions.fast}`,
    userSelect: 'none',
    textDecoration: 'none',
    outline: 'none',
    gap: vars.space[2],

    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.backgroundAlt
        },
        '&[data-highlighted]': {
            backgroundColor: vars.colors.backgroundAlt
        },
        '&[data-disabled]': {
            opacity: 0.5,
            cursor: 'not-allowed'
        }
    }
});

export const separator = style({
    height: '1px',
    backgroundColor: vars.colors.border,
    margin: `${vars.space[1]} 0`
});

export const triggerItem = style({
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${vars.space[2]} ${vars.space[2]}`,
    borderRadius: vars.radii.sm,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.foreground,
    cursor: 'pointer',
    transition: `background ${vars.transitions.fast}`,
    width: '100%',
    boxSizing: 'border-box',
    gap: vars.space[2],

    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.backgroundAlt
        },
        '&[data-highlighted]': {
            backgroundColor: vars.colors.backgroundAlt
        },
        '&[data-state="open"]': {
            backgroundColor: vars.colors.backgroundAlt
        }
    }
});

export const label = style({
    padding: `${vars.space[1]} ${vars.space[2]}`,
    fontSize: vars.fontSizes.xs,
    fontWeight: vars.fontWeights.semibold,
    color: vars.colors.foregroundMuted
});

export const itemGroup = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[1]
});
