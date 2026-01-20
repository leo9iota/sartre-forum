import { style } from '@vanilla-extract/css';

import { focusRing, visuallyHidden } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

export const switchRoot = style({
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    selectors: {
        '&[data-disabled]': {
            cursor: 'not-allowed',
            opacity: 0.5
        }
    }
});

export const switchInput = style(visuallyHidden);

export const switchControl = style({
    display: 'inline-flex',
    alignItems: 'center',
    height: '1.5rem',
    width: '2.75rem',
    borderRadius: vars.radii.full,
    backgroundColor: vars.colors.border,
    border: '2px solid transparent',
    transition: `background-color ${vars.transitions.normal} ${vars.easings.default}`,
    outline: 'none',
    selectors: {
        '&[data-state="checked"]': {
            backgroundColor: vars.colors.primary
        },
        [`${switchInput}:focus-visible ~ &`]: {
            ...focusRing
        }
    }
});

export const switchThumb = style({
    display: 'block',
    width: '1.25rem',
    height: '1.25rem',
    backgroundColor: vars.colors.background,
    borderRadius: vars.radii.full,
    boxShadow: vars.shadows.sm,
    transition: `transform ${vars.transitions.normal} ${vars.easings.spring}, width ${vars.transitions.normal} ${vars.easings.spring}`,
    transform: 'translateX(0)',
    pointerEvents: 'none',

    selectors: {
        [`${switchControl}[data-state="checked"] &`]: {
            transform: 'translateX(1.25rem)'
        },
        [`${switchRoot}[data-pressed] &`]: {
            width: '1.5rem'
        },
        [`${switchRoot}[data-pressed] ${switchControl}[data-state="checked"] &`]: {
            transform: 'translateX(1rem)'
        }
    }
});

export const switchLabel = style({
    marginLeft: vars.space[2],
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.foreground,
    userSelect: 'none'
});
