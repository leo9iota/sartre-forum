import { style } from '@vanilla-extract/css';

import { staticVars, vars } from '../../../styles/vars.css';

export const authContainer = style({
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: staticVars.space[4],
    background: vars.colors.background
});

export const authCard = style({
    width: '100%',
    maxWidth: '24rem',
    padding: staticVars.space[8],
    borderRadius: staticVars.radii.xl,
    background: vars.colors.backgroundAlt,
    border: `1px solid ${vars.colors.border}`,
    boxShadow: staticVars.shadows.lg
});

export const authTitle = style({
    fontSize: staticVars.fontSizes['2xl'],
    fontWeight: staticVars.fontWeights.bold,
    fontFamily: staticVars.fonts.heading,
    color: vars.colors.foreground,
    marginBottom: staticVars.space[2],
    textAlign: 'center'
});

export const authSubtitle = style({
    fontSize: staticVars.fontSizes.sm,
    color: vars.colors.foregroundMuted,
    marginBottom: staticVars.space[6],
    textAlign: 'center'
});

export const authForm = style({
    display: 'flex',
    flexDirection: 'column',
    gap: staticVars.space[4]
});

export const formGroup = style({
    display: 'flex',
    flexDirection: 'column',
    gap: staticVars.space[2]
});

export const label = style({
    fontSize: staticVars.fontSizes.sm,
    fontWeight: staticVars.fontWeights.medium,
    color: vars.colors.foreground
});

export const errorText = style({
    fontSize: staticVars.fontSizes.sm,
    color: vars.colors.error
});

export const authLink = style({
    fontSize: staticVars.fontSizes.sm,
    color: vars.colors.primary,
    textDecoration: 'none',
    textAlign: 'center',
    marginTop: staticVars.space[4],
    ':hover': {
        textDecoration: 'underline'
    }
});
