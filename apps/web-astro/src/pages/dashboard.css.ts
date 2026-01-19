import { style } from '@vanilla-extract/css';

import { staticVars, vars } from '@/styles/vars.css';

export const container = style({
    minHeight: '100vh',
    padding: staticVars.space[8],
    background: vars.colors.background
});

export const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: staticVars.space[8]
});

export const title = style({
    fontSize: staticVars.fontSizes['3xl'],
    fontWeight: staticVars.fontWeights.bold,
    fontFamily: staticVars.fonts.heading,
    color: vars.colors.foreground
});

export const card = style({
    maxWidth: '36rem',
    padding: staticVars.space[6],
    borderRadius: staticVars.radii.xl,
    background: vars.colors.backgroundAlt,
    border: `1px solid ${vars.colors.border}`,
    boxShadow: staticVars.shadows.md
});

export const cardTitle = style({
    fontSize: staticVars.fontSizes.xl,
    fontWeight: staticVars.fontWeights.semibold,
    color: vars.colors.foreground,
    marginBottom: staticVars.space[3]
});

export const cardText = style({
    fontSize: staticVars.fontSizes.base,
    color: vars.colors.foregroundMuted,
    marginBottom: staticVars.space[2]
});

export const loading = style({
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: staticVars.fontSizes.lg,
    color: vars.colors.foregroundMuted
});
