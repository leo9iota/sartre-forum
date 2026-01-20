import { style } from '@vanilla-extract/css';

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
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: vars.space[4],
    paddingBottom: vars.space[4],
    paddingLeft: vars.space[4],
    paddingRight: vars.space[4]
});

export const copyright = style({
    color: vars.colors.foregroundMuted,
    fontFamily: vars.fonts.mono,
    fontSize: vars.fontSizes.sm
});
