import { keyframes, style } from '@vanilla-extract/css';

import { focusRing } from '../../../styles/utils.css';
import { vars } from '../../../styles/vars.css';

// Animations
const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});

const fadeOut = keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 }
});

const scaleIn = keyframes({
    from: {
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.95)'
    },
    to: {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)'
    }
});

const scaleOut = keyframes({
    from: {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)'
    },
    to: {
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.95)'
    }
});

export const backdrop = style({
    position: 'fixed',
    inset: 0,
    backgroundColor: vars.colors.overlay,
    zIndex: vars.zIndices.modal,
    selectors: {
        '&[data-state="open"]': {
            animation: `${fadeIn} ${vars.transitions.normal} ${vars.easings.easeOut}`
        },
        '&[data-state="closed"]': {
            animation: `${fadeOut} ${vars.transitions.normal} ${vars.easings.easeIn}`
        }
    }
});

export const positioner = style({
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: vars.zIndices.modal
});

export const content = style({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[4],
    width: '90vw',
    maxWidth: '28rem',
    maxHeight: '85vh',
    padding: vars.space[6],
    backgroundColor: vars.colors.background,
    borderRadius: vars.radii.xl,
    boxShadow: vars.shadows.xl,
    border: `1px solid ${vars.colors.border}`,
    zIndex: vars.zIndices.modal,
    outline: 'none',
    overflow: 'auto',
    selectors: {
        '&[data-state="open"]': {
            animation: `${scaleIn} ${vars.transitions.normal} ${vars.easings.easeOut}`
        },
        '&[data-state="closed"]': {
            animation: `${scaleOut} ${vars.transitions.fast} ${vars.easings.easeIn}`
        },
        '&:focus-visible': {
            ...focusRing
        }
    }
});

export const title = style({
    margin: 0,
    fontSize: vars.fontSizes.lg,
    fontWeight: vars.fontWeights.semibold,
    fontFamily: vars.fonts.heading,
    color: vars.colors.foreground,
    lineHeight: 1.3
});

export const description = style({
    margin: 0,
    fontSize: vars.fontSizes.sm,
    color: vars.colors.foregroundMuted,
    lineHeight: 1.5
});

export const closeTrigger = style({
    position: 'absolute',
    top: vars.space[4],
    right: vars.space[4],
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2rem',
    height: '2rem',
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: vars.radii.md,
    color: vars.colors.foregroundMuted,
    cursor: 'pointer',
    transition: `color ${vars.transitions.fast} ${vars.easings.default}, background-color ${vars.transitions.fast} ${vars.easings.default}`,
    selectors: {
        '&:hover': {
            color: vars.colors.foreground,
            backgroundColor: vars.colors.backgroundAlt
        },
        '&:focus-visible': {
            ...focusRing
        }
    }
});
