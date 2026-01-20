import { style } from '@vanilla-extract/css';

import { vars } from '../styles/vars.css';

export const main = style({
    maxWidth: '72rem',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: vars.space[4],
    paddingRight: vars.space[4],
    paddingTop: vars.space[4],
    paddingBottom: vars.space[4]
});

export const title = style({
    marginBottom: vars.space[8]
});

export const section = style({
    marginBottom: vars.space[10],
    padding: vars.space[6],
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: vars.colors.border,
    borderRadius: vars.radii.lg,
    backgroundColor: vars.colors.backgroundAlt,
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[6]
});

export const flexRow = style({
    display: 'flex',
    gap: vars.space[4],
    alignItems: 'center'
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
    marginBottom: vars.space[2]
});

export const postSnippet = style({
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
});

export const postDate = style({
    marginTop: vars.space[2]
});
