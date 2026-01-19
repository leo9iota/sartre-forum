import { style } from '@vanilla-extract/css';

import { focusRing } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

export const paginationRoot = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.space[2]
});

export const paginationItem = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.5rem', // 10
    minWidth: '2.5rem',
    padding: `0 ${vars.space[3]}`,
    borderRadius: vars.radii.md,
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.foreground,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: `all ${vars.transitions.fast} ${vars.easings.default}`,
    border: '1px solid transparent',
    textDecoration: 'none',

    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.backgroundAlt
        },
        '&:focus-visible': focusRing,
        '&[data-selected]': {
            backgroundColor: vars.colors.primary,
            color: vars.colors.background,
            pointerEvents: 'none'
        },
        '&[data-disabled]': {
            opacity: 0.5,
            cursor: 'not-allowed',
            pointerEvents: 'none'
        }
    }
});

export const paginationEllipsis = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.5rem',
    width: '2.5rem',
    color: vars.colors.foregroundMuted
});

export const paginationTrigger = style([
    paginationItem,
    {
        padding: `0 ${vars.space[2]}`
    }
]);
