import { globalStyle } from '@vanilla-extract/css';

import { vars } from './vars.css';

globalStyle('html', {
    height: '100%',
    backgroundColor: vars.colors.background,
    color: vars.colors.foreground
});

globalStyle('body', {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    fontFamily: vars.fonts.body,
    lineHeight: 1.6,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
});

globalStyle('a', {
    color: vars.colors.primary,
    textDecoration: 'none',
    transition: 'color 0.15s ease'
});

globalStyle('a:hover', {
    color: vars.colors.primaryHover
});

globalStyle('h1, h2, h3, h4, h5, h6', {
    fontFamily: vars.fonts.heading,
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.foreground
});

globalStyle('code, pre', {
    fontFamily: vars.fonts.mono,
    backgroundColor: vars.colors.backgroundAlt,
    borderRadius: vars.radii.sm
});

globalStyle('code', {
    padding: '0.125em 0.25em',
    fontSize: '0.9em'
});

globalStyle('pre', {
    padding: vars.space[4],
    overflow: 'auto'
});

globalStyle('::selection', {
    backgroundColor: vars.colors.primary,
    color: vars.colors.background
});
