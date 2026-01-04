import { globalStyle } from '@vanilla-extract/css';

import { vars } from './vars.css';

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0
});

globalStyle('html, body', {
    height: '100%',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: vars.colors.background,
    color: vars.colors.foreground,
    lineHeight: 1.5,
    WebkitFontSmoothing: 'antialiased'
});

globalStyle('a', {
    color: 'inherit',
    textDecoration: 'none'
});

globalStyle('button', {
    fontFamily: 'inherit'
});
