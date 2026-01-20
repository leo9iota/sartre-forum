import { globalStyle, style } from '@vanilla-extract/css';

import { focusRing } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

export const checkboxRoot = style({
    display: 'inline-flex',
    alignItems: 'center',
    gap: vars.space[2],
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative'
});

globalStyle(`${checkboxRoot}[data-disabled]`, {
    cursor: 'not-allowed',
    opacity: 0.5
});

export const checkboxControl = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: vars.radii.sm,
    border: `2px solid ${vars.colors.border}`,
    backgroundColor: 'transparent',
    transition: `all ${vars.transitions.fast} ${vars.easings.default}`,
    flexShrink: 0,
    selectors: {
        '&:focus-visible': focusRing
    }
});

globalStyle(
    `${checkboxControl}[data-state="checked"], ${checkboxControl}[data-state="indeterminate"]`,
    {
        backgroundColor: vars.colors.primary,
        borderColor: vars.colors.primary,
        color: vars.colors.background
    }
);

globalStyle(`${checkboxControl}[data-hover]:not([data-disabled])`, {
    borderColor: vars.colors.borderStrong
});

globalStyle(`${checkboxControl}[data-invalid]`, {
    borderColor: vars.colors.error
});

export const checkboxIndicator = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'inherit',
    width: '100%',
    height: '100%'
});

globalStyle(`${checkboxIndicator} svg`, {
    width: '0.875rem',
    height: '0.875rem',
    strokeWidth: 3
});

export const checkboxLabel = style({
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.foreground,
    lineHeight: 1
});

globalStyle(`${checkboxLabel}[data-disabled]`, {
    color: vars.colors.foregroundMuted
});

export const checkboxHiddenInput = style({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0
});
