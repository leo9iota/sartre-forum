import { style } from '@vanilla-extract/css';

import { focusRing } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

export const footer = style({
    marginTop: 'auto',
    backgroundColor: vars.colors.backgroundAlt,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: vars.colors.border
});

export const container = style({
    maxWidth: '72rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: vars.space[4],
    padding: vars.space[4]
});

export const copyright = style({
    color: vars.colors.foregroundMuted,
    fontFamily: vars.fonts.mono,
    fontSize: vars.fontSizes.sm
});

export const nav = style({
    display: 'flex',
    alignItems: 'center',
    gap: vars.space[4]
});

export const navLink = style({
    color: vars.colors.foregroundMuted,
    fontFamily: vars.fonts.mono,
    fontSize: vars.fontSizes.sm,
    textDecoration: 'none',
    transition: 'color 0.15s ease',
    selectors: {
        '&:hover': {
            color: vars.colors.foreground
        },
        '&:focus-visible': {
            ...focusRing
        }
    }
});
