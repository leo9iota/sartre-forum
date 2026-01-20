import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { focusRing } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

export const collapsibleRoot = style({
    width: '100%'
});

export const collapsibleTrigger = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: `${vars.space[3]} ${vars.space[4]}`,
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.foreground,
    backgroundColor: vars.colors.backgroundAlt,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.md,
    cursor: 'pointer',
    transition: `all ${vars.transitions.fast} ${vars.easings.default}`,
    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.border
        },
        '&:focus-visible': focusRing,
        '&[data-disabled]': {
            opacity: 0.5,
            cursor: 'not-allowed'
        }
    }
});

export const collapsibleIndicator = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: `transform ${vars.transitions.normal} ${vars.easings.easeInOut}`,
    flexShrink: 0
});

globalStyle(`${collapsibleIndicator}[data-state="open"]`, {
    transform: 'rotate(90deg)'
});

globalStyle(`${collapsibleIndicator} svg`, {
    width: '1rem',
    height: '1rem'
});

const expandAnimation = keyframes({
    from: {
        height: '0',
        opacity: 0
    },
    to: {
        height: 'var(--height)',
        opacity: 1
    }
});

const collapseAnimation = keyframes({
    from: {
        height: 'var(--height)',
        opacity: 1
    },
    to: {
        height: '0',
        opacity: 0
    }
});

export const collapsibleContent = style({
    overflow: 'hidden',
    selectors: {
        '&[data-state="open"]': {
            animation: `${expandAnimation} ${vars.transitions.normal} ${vars.easings.easeOut}`
        },
        '&[data-state="closed"]': {
            animation: `${collapseAnimation} ${vars.transitions.normal} ${vars.easings.easeIn}`
        }
    }
});

export const collapsibleContentInner = style({
    padding: vars.space[4],
    borderLeft: `1px solid ${vars.colors.border}`,
    borderRight: `1px solid ${vars.colors.border}`,
    borderBottom: `1px solid ${vars.colors.border}`,
    borderRadius: `0 0 ${vars.radii.md} ${vars.radii.md}`
});
