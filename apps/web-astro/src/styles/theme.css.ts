import { createTheme } from '@vanilla-extract/css';

import { colorVars } from './vars.css';

/**
 * Light Theme - "Refined Utilitarian" Paper/Cream
 * Inspired by markdown documents and paper aesthetic
 */
export const lightTheme = createTheme(colorVars, {
    background: '#f8f7ea', // Warm cream paper
    backgroundAlt: '#ede9da', // Slightly darker for cards/sections
    foreground: '#1A1A1A', // Near-black for maximum readability
    foregroundMuted: '#6B6B6B', // Secondary text (metadata, dates)
    primary: '#2C2C2C', // Primary actions, links
    primaryHover: '#1A1A1A', // Darker on hover
    accent: '#8B4513', // Warm brown accent (subtle)
    border: '#e0dac9', // Soft warm gray border
    borderStrong: '#c8bca8', // Stronger emphasis border
    // Semantic state colors
    error: '#DC2626',
    errorMuted: '#FEE2E2',
    success: '#16A34A',
    successMuted: '#DCFCE7',
    warning: '#CA8A04',
    warningMuted: '#FEF9C3',
    // UI-specific
    ring: 'rgba(210, 190, 160, 0.6)',
    ringGlow: 'rgba(210, 190, 160, 0.25)',
    overlay: 'rgba(0, 0, 0, 0.5)',
    ghostHover: 'rgba(0, 0, 0, 0.06)'
});

/**
 * Dark Theme - "Refined Utilitarian" Charcoal
 * Comfortable night reading with warm undertones
 */
export const darkTheme = createTheme(colorVars, {
    background: '#1C1C1E', // Deep charcoal
    backgroundAlt: '#2C2C2E', // Elevated surfaces
    foreground: '#E5E5E7', // Off-white for comfort
    foregroundMuted: '#8E8E93', // Muted secondary text
    primary: '#E5E5E7', // Primary actions
    primaryHover: '#FFFFFF', // Brighter on hover
    accent: '#D4A574', // Warm gold accent
    border: '#3A3A3C', // Subtle dark border
    borderStrong: '#c8bca8', // Stronger border
    // Semantic state colors
    error: '#EF4444',
    errorMuted: '#7F1D1D',
    success: '#22C55E',
    successMuted: '#14532D',
    warning: '#EAB308',
    warningMuted: '#713F12',
    // UI-specific
    ring: 'rgba(210, 190, 160, 0.5)',
    ringGlow: 'rgba(210, 190, 160, 0.2)',
    overlay: 'rgba(0, 0, 0, 0.7)',
    ghostHover: 'rgba(255, 255, 255, 0.08)'
});
