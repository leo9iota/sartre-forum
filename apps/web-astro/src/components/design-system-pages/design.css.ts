import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/vars.css';

export const layoutWrapper = style({
    display: 'flex',
    minHeight: '100vh'
});

export const sidebar = style({
    width: '16rem',
    flexShrink: 0,
    borderRight: `1px solid ${vars.colors.border}`,
    backgroundColor: vars.colors.background,
    padding: vars.space[4],
    position: 'sticky',
    top: 0,
    height: '100vh',
    overflowY: 'auto',
    '@media': {
        'screen and (max-width: 768px)': {
            display: 'none'
        }
    }
});

export const sidebarTitle = style({
    fontFamily: vars.fonts.heading,
    fontSize: vars.fontSizes.lg,
    fontWeight: vars.fontWeights.bold,
    marginBottom: vars.space[6],
    color: vars.colors.foreground
});

export const navGroup = style({
    marginBottom: vars.space[6]
});

export const navGroupLabel = style({
    fontSize: vars.fontSizes.xs,
    fontWeight: vars.fontWeights.semibold,
    color: vars.colors.foregroundMuted,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: vars.space[2]
});

export const navList = style({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[1]
});

export const navItem = style({
    padding: `${vars.space[2]} ${vars.space[3]}`,
    borderRadius: vars.radii.md,
    color: vars.colors.foreground,
    textDecoration: 'none',
    fontSize: vars.fontSizes.sm,
    transition: `background ${vars.transitions.fast}, color ${vars.transitions.fast}`,
    display: 'block',
    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.backgroundAlt
        },
        '&[data-active="true"]': {
            backgroundColor: vars.colors.backgroundAlt,
            fontWeight: vars.fontWeights.medium
        }
    }
});

export const mainContent = style({
    flex: 1,
    padding: vars.space[8],
    maxWidth: '64rem',
    '@media': {
        'screen and (max-width: 768px)': {
            padding: vars.space[4]
        }
    }
});

export const pageHeader = style({
    marginBottom: vars.space[8]
});

export const pageTitle = style({
    fontFamily: vars.fonts.heading,
    fontSize: vars.fontSizes['4xl'],
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.foreground,
    marginBottom: vars.space[2]
});

export const pageDescription = style({
    fontSize: vars.fontSizes.lg,
    color: vars.colors.foregroundMuted
});

export const section = style({
    marginBottom: vars.space[10]
});

export const sectionTitle = style({
    fontFamily: vars.fonts.heading,
    fontSize: vars.fontSizes['2xl'],
    fontWeight: vars.fontWeights.semibold,
    color: vars.colors.foreground,
    marginBottom: vars.space[4],
    paddingBottom: vars.space[2],
    borderBottom: `1px solid ${vars.colors.border}`
});

export const card = style({
    padding: vars.space[6],
    backgroundColor: vars.colors.backgroundAlt,
    borderRadius: vars.radii.lg,
    border: `1px solid ${vars.colors.border}`
});

export const grid = style({
    display: 'grid',
    gap: vars.space[4],
    gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))'
});

export const tokenBox = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[2],
    padding: vars.space[4],
    backgroundColor: vars.colors.background,
    borderRadius: vars.radii.md,
    border: `1px solid ${vars.colors.border}`
});

export const tokenLabel = style({
    fontSize: vars.fontSizes.xs,
    fontFamily: vars.fonts.mono,
    color: vars.colors.foregroundMuted
});

export const tokenValue = style({
    fontSize: vars.fontSizes.sm,
    fontFamily: vars.fonts.mono,
    color: vars.colors.foreground
});

export const colorSwatch = style({
    width: '100%',
    height: '3rem',
    borderRadius: vars.radii.md,
    border: `1px solid ${vars.colors.border}`
});

export const demoRow = style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: vars.space[4],
    alignItems: 'center'
});

export const spacingBar = style({
    backgroundColor: vars.colors.primary,
    height: '1.5rem',
    borderRadius: vars.radii.sm
});
