import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/vars.css';

export const switchRoot = style({
    display: 'inline-flex',
    alignItems: 'center'
});

export const switchInput = style({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0
});

export const switchControl = style({
    display: 'inline-flex',
    alignItems: 'center',
    height: '1.5rem', // 24px
    width: '2.75rem', // 44px
    borderRadius: vars.radii.full,
    backgroundColor: vars.colors.muted, // unchecked
    border: '2px solid transparent',
    transition: 'background-color 0.2s',
    cursor: 'pointer',
    selectors: {
        '&[data-checked]': {
            backgroundColor: vars.colors.primary
        },
        '&[data-disabled]': {
            opacity: 0.5,
            cursor: 'not-allowed'
        }
    }
});

export const switchThumb = style({
    display: 'block',
    width: '1.25rem', // 20px
    height: '1.25rem', // 20px
    backgroundColor: 'white',
    borderRadius: vars.radii.full,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s',
    transform: 'translateX(0)',
    selectors: {
        [`${switchControl}[data-checked] &`]: {
            transform: 'translateX(1.25rem)' // 20px
        }
    }
});

export const switchLabel = style({
    marginLeft: vars.space[3],
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.foreground,
    userSelect: 'none'
});
