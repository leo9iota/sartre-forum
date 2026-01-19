import { style } from '@vanilla-extract/css';

import { vars } from './vars.css';

export const container = style({
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: vars.space[4],
    paddingRight: vars.space[4],
    maxWidth: '80rem', // 1280px

    '@media': {
        'screen and (min-width: 640px)': {
            paddingLeft: vars.space[6],
            paddingRight: vars.space[6]
        },
        'screen and (min-width: 1024px)': {
            paddingLeft: vars.space[8],
            paddingRight: vars.space[8]
        }
    }
});

export const flex = {
    row: style({ display: 'flex', flexDirection: 'row' }),
    col: style({ display: 'flex', flexDirection: 'column' }),
    center: style({ display: 'flex', alignItems: 'center', justifyContent: 'center' }),
    between: style({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }),
    start: style({ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }),
    end: style({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }),
    wrap: style({ flexWrap: 'wrap' })
};

export const grid = {
    cols2: style({
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: vars.space[4],
        '@media': {
            'screen and (min-width: 768px)': {
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
            }
        }
    }),
    cols3: style({
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: vars.space[4],
        '@media': {
            'screen and (min-width: 768px)': {
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
            },
            'screen and (min-width: 1024px)': {
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
            }
        }
    }),
    cols4: style({
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: vars.space[4],
        '@media': {
            'screen and (min-width: 640px)': {
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
            },
            'screen and (min-width: 1024px)': {
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
            }
        }
    })
};

export const space = {
    y2: style({ selectors: { '> * + *': { marginTop: vars.space[2] } } }),
    y4: style({ selectors: { '> * + *': { marginTop: vars.space[4] } } }),
    y8: style({ selectors: { '> * + *': { marginTop: vars.space[8] } } }),
    x2: style({ selectors: { '> * + *': { marginLeft: vars.space[2] } } }),
    x4: style({ selectors: { '> * + *': { marginLeft: vars.space[4] } } })
};
