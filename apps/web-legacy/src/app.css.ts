import { style } from '@vanilla-extract/css';

import { vars } from './styles/vars.css';

export const themeWrapper = style({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: vars.colors.background,
    color: vars.colors.foreground,
    transition: 'background-color 0.2s ease, color 0.2s ease'
});

export const mainContent = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
});
