import { style } from '@vanilla-extract/css';

import { vars } from '../styles/vars.css';

export const main = style({
    maxWidth: '72rem', // 6xl
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: vars.space[4]
});

export const title = style({
    fontSize: vars.fontSizes['4xl'],
    fontWeight: vars.fontWeights.bold,
    marginBottom: vars.space[8]
});

export const section = style({
    marginBottom: vars.space[10],
    padding: vars.space[6],
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: vars.colors.border,
    borderRadius: vars.radii.lg,
    backgroundColor: vars.colors.muted,
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[6]
});

export const sectionTitle = style({
    fontSize: vars.fontSizes['2xl'],
    fontWeight: vars.fontWeights.bold,
    marginBottom: vars.space[4]
});

export const flexRow = style({
    display: 'flex',
    gap: vars.space[4],
    alignItems: 'center'
});

export const label = style({
    fontWeight: vars.fontWeights.medium
});

export const postGrid = style({
    display: 'grid',
    gap: vars.space[4]
});

export const postCard = style({
    padding: vars.space[4],
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: vars.colors.border,
    borderRadius: vars.radii.lg,
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    transition: 'box-shadow 0.2s',
    selectors: {
        '&:hover': {
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }
    }
});

export const postLink = style({
    display: 'block'
});

export const postTitle = style({
    fontSize: vars.fontSizes.xl,
    fontWeight: vars.fontWeights.semibold,
    marginBottom: vars.space[2]
});

export const postSnippet = style({
    color: vars.colors.mutedForeground,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
});

export const postDate = style({
    marginTop: vars.space[2],
    fontSize: vars.fontSizes.sm,
    color: vars.colors.mutedForeground
});
