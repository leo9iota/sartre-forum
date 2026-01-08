import { style } from '@vanilla-extract/css';

import { focusRing } from './styles/utils.css';
import { vars } from './styles/vars.css';

export const nav = style({
    display: 'flex',
    alignItems: 'center',
    gap: vars.space[4],
    padding: vars.space[4],
    backgroundColor: vars.colors.backgroundAlt,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: vars.colors.border
});

export const navLink = style({
    color: vars.colors.foreground,
    fontFamily: vars.fonts.mono,
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    textDecoration: 'none',
    transition: 'color 0.15s ease',
    selectors: {
        '&:hover': {
            color: vars.colors.foregroundMuted
        },
        '&:focus-visible': {
            ...focusRing
        }
    }
});

export const navSpacer = style({
    flex: 1
});

export const themeWrapper = style({
    minHeight: '100vh',
    backgroundColor: vars.colors.background,
    color: vars.colors.foreground,
    transition: 'background-color 0.2s ease, color 0.2s ease'
});
