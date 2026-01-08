import { createTheme } from '@vanilla-extract/css';

import { colorVars } from './vars.css';

/**
 * Light Theme - "Refined Utilitarian" Paper/Cream
 * Inspired by markdown documents and paper aesthetic
 */
export const lightTheme = createTheme(colorVars, {
    background: '#F5F3EF', // Warm cream paper
    backgroundAlt: '#EBE8E2', // Slightly darker for cards/sections
    foreground: '#1A1A1A', // Near-black for maximum readability
    foregroundMuted: '#6B6B6B', // Secondary text (metadata, dates)
    primary: '#2C2C2C', // Primary actions, links
    primaryHover: '#1A1A1A', // Darker on hover
    accent: '#8B4513', // Warm brown accent (subtle)
    border: '#D4D0C8', // Soft warm gray border
    borderStrong: '#B8B4AC', // Stronger emphasis border
    // Semantic state colors
    error: '#DC2626',
    errorMuted: '#FEE2E2',
    success: '#16A34A',
    successMuted: '#DCFCE7',
    warning: '#CA8A04',
    warningMuted: '#FEF9C3',
    // UI-specific
    ring: '#2C2C2C',
    overlay: 'rgba(0, 0, 0, 0.5)'
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
    borderStrong: '#48484A', // Stronger border
    // Semantic state colors
    error: '#EF4444',
    errorMuted: '#7F1D1D',
    success: '#22C55E',
    successMuted: '#14532D',
    warning: '#EAB308',
    warningMuted: '#713F12',
    // UI-specific
    ring: '#E5E5E7',
    overlay: 'rgba(0, 0, 0, 0.7)'
});
