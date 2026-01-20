import { globalStyle, style } from '@vanilla-extract/css';

import { focusRing } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

export const clipboardRoot = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[2]
});

export const clipboardLabel = style({
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.foreground
});

export const clipboardControl = style({
    display: 'flex',
    alignItems: 'center',
    gap: vars.space[2]
});

export const clipboardInput = style({
    flex: 1,
    padding: `${vars.space[2]} ${vars.space[3]}`,
    fontSize: vars.fontSizes.sm,
    fontFamily: vars.fonts.mono,
    backgroundColor: vars.colors.backgroundAlt,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.md,
    color: vars.colors.foreground,
    outline: 'none',
    transition: `border-color ${vars.transitions.fast} ${vars.easings.default}`,
    selectors: {
        '&:focus-visible': focusRing
    }
});

globalStyle(`${clipboardInput}[data-readonly]`, {
    cursor: 'default'
});

export const clipboardTrigger = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: vars.space[2],
    backgroundColor: vars.colors.backgroundAlt,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.md,
    cursor: 'pointer',
    color: vars.colors.foreground,
    transition: `all ${vars.transitions.fast} ${vars.easings.default}`,
    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.border
        },
        '&:focus-visible': focusRing,
        '&[data-copied]': {
            color: vars.colors.success,
            borderColor: vars.colors.success
        }
    }
});

export const clipboardIndicator = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
});

globalStyle(`${clipboardIndicator} svg`, {
    width: '1rem',
    height: '1rem'
});

export const clipboardValueText = style({
    fontFamily: vars.fonts.mono,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.foreground
});
