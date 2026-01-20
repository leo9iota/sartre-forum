import { style } from '@vanilla-extract/css';

import { staticVars, vars } from '../../../styles/vars.css';

export const authContainer = style({
    display: 'flex',
    flex: 1,
    width: '100%',
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

export const footerText = style({
    fontSize: staticVars.fontSizes.sm,
    color: vars.colors.foregroundMuted,
    textAlign: 'center',
    marginTop: staticVars.space[4]
});

export const footerLink = style({
    color: vars.colors.primary,
    textDecoration: 'none',
    fontWeight: staticVars.fontWeights.medium,
    ':hover': {
        textDecoration: 'underline',
        color: vars.colors.primaryHover
    }
});

export const divider = style({
    display: 'flex',
    alignItems: 'center',
    gap: staticVars.space[3],
    marginTop: staticVars.space[6],
    marginBottom: staticVars.space[4],
    color: vars.colors.foregroundMuted,
    fontSize: staticVars.fontSizes.sm,
    '::before': {
        content: '""',
        flex: 1,
        height: '1px',
        background: vars.colors.border
    },
    '::after': {
        content: '""',
        flex: 1,
        height: '1px',
        background: vars.colors.border
    }
});

export const socialButtons = style({
    display: 'flex',
    flexDirection: 'column',
    gap: staticVars.space[3]
});
