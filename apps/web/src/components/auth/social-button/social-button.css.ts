import { style } from '@vanilla-extract/css';

import { staticVars, vars } from '../../../styles/vars.css';

export const socialButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: staticVars.space[2],
    width: '100%',
    padding: `${staticVars.space[3]} ${staticVars.space[4]}`,
    fontSize: staticVars.fontSizes.sm,
    fontWeight: staticVars.fontWeights.medium,
    fontFamily: staticVars.fonts.body,
    borderRadius: staticVars.radii.md,
    border: `1px solid ${vars.colors.border}`,
    background: vars.colors.background,
    color: vars.colors.foreground,
    cursor: 'pointer',
    transition: 'all 150ms ease',
    ':hover': {
        background: vars.colors.backgroundAlt,
        borderColor: vars.colors.borderStrong
    },
    ':disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
    }
});

export const icon = style({
    width: '1.25rem',
    height: '1.25rem',
    flexShrink: 0
});
