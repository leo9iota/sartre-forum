import { style } from '@vanilla-extract/css';

import { vars } from './styles/vars.css';

export const nav = style({
    display: 'flex',
    gap: vars.space[4],
    padding: vars.space[4],
    backgroundColor: vars.colors.muted,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: vars.colors.border
});

export const navLink = style({
    color: vars.colors.foreground,
    fontWeight: vars.fontWeights.medium,
    textDecoration: 'none',
    selectors: {
        '&:hover': {
            color: vars.colors.mutedForeground
        }
    }
});
