import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/vars.css';

export const container = style({
    maxWidth: '48rem',
    margin: '0 auto',
    padding: vars.space[8],
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[8]
});

export const section = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[4],
    paddingTop: vars.space[6],
    borderTop: `1px solid ${vars.colors.border}`,

    selectors: {
        '&:first-child': {
            paddingTop: 0,
            borderTop: 'none'
        }
    }
});

export const showcase = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[6],
    marginTop: vars.space[2]
});

export const item = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[1]
});

export const row = style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: vars.space[4]
});

export const alignDemo = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[2],
    width: '100%'
});

export const truncateDemo = style({
    maxWidth: '20rem'
});
