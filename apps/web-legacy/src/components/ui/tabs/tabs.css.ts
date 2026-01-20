import { globalStyle, style } from '@vanilla-extract/css';

import { focusRing } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

export const tabsRoot = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
});

globalStyle(`${tabsRoot}[data-orientation="vertical"]`, {
    flexDirection: 'row'
});

export const tabsList = style({
    display: 'flex',
    alignItems: 'center',
    gap: vars.space[1],
    borderBottom: `1px solid ${vars.colors.border}`,
    position: 'relative',
    flexShrink: 0
});

globalStyle(`${tabsList}[data-orientation="vertical"]`, {
    flexDirection: 'column',
    borderBottom: 'none',
    borderRight: `1px solid ${vars.colors.border}`,
    alignItems: 'stretch'
});

export const tabsTrigger = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${vars.space[2]} ${vars.space[4]}`,
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.foregroundMuted,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    transition: `color ${vars.transitions.fast} ${vars.easings.default}`,
    whiteSpace: 'nowrap',
    selectors: {
        '&:hover': {
            color: vars.colors.foreground
        },
        '&[data-selected]': {
            color: vars.colors.primary
        },
        '&[data-disabled]': {
            opacity: 0.5,
            cursor: 'not-allowed'
        },
        '&:focus-visible': {
            ...focusRing
        }
    }
});

export const tabsContent = style({
    padding: vars.space[4],
    outline: 'none',
    selectors: {
        '&:focus-visible': {
            ...focusRing
        }
    }
});

export const tabsIndicator = style({
    position: 'absolute',
    bottom: '0',
    left: '0',
    height: '2px',
    backgroundColor: vars.colors.primary,
    transition: `left ${vars.transitions.fast} ${vars.easings.easeInOut}, width ${vars.transitions.fast} ${vars.easings.easeInOut}`
});

globalStyle(`${tabsRoot}[data-orientation="vertical"] ${tabsIndicator}`, {
    bottom: 'auto',
    left: 'auto',
    right: '0',
    width: '2px',
    height: 'auto'
});
