import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import neutral from '@park-ui/panda-preset/colors/neutral';

import { animationStyles } from '@/theme/animation-styles';
import { green } from '@/theme/colors/green';
import { jade } from '@/theme/colors/jade';
import { red } from '@/theme/colors/red';
import { slate } from '@/theme/colors/slate';
import { conditions } from '@/theme/conditions';
import { globalCss } from '@/theme/global-css';
import { keyframes } from '@/theme/keyframes';
import { layerStyles } from '@/theme/layer-styles';
// Custom recipes that don't conflict with Park UI preset
import { absoluteCenter } from '@/theme/recipes/absolute-center';
import { group } from '@/theme/recipes/group';
import { spinner } from '@/theme/recipes/spinner';
import { textStyles } from '@/theme/text-styles';
import { colors } from '@/theme/tokens/colors';
import { durations } from '@/theme/tokens/durations';
import { shadows } from '@/theme/tokens/shadows';
import { zIndex } from '@/theme/tokens/z-index';

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Park UI preset with neutral gray palette
    presets: [
        '@pandacss/preset-base',
        createPreset({
            accentColor: neutral,
            grayColor: neutral,
            radius: 'md'
        })
    ],

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Use JSX factory for SolidJS
    jsxFramework: 'solid',

    // The output directory for your css system
    outdir: 'styled-system',

    globalCss: globalCss,
    conditions: conditions,

    theme: {
        extend: {
            animationStyles: animationStyles,
            recipes: {
                group,
                absoluteCenter,
                spinner
            },
            keyframes: keyframes,
            layerStyles: layerStyles,
            textStyles: textStyles,

            tokens: {
                colors: colors,
                durations: durations,
                zIndex: zIndex
            },

            semanticTokens: {
                colors: {
                    fg: {
                        default: {
                            value: {
                                _light: '{colors.gray.12}',
                                _dark: '{colors.gray.12}'
                            }
                        },

                        muted: {
                            value: {
                                _light: '{colors.gray.11}',
                                _dark: '{colors.gray.11}'
                            }
                        },

                        subtle: {
                            value: {
                                _light: '{colors.gray.10}',
                                _dark: '{colors.gray.10}'
                            }
                        }
                    },

                    border: {
                        value: {
                            _light: '{colors.gray.4}',
                            _dark: '{colors.gray.4}'
                        }
                    },

                    error: {
                        value: {
                            _light: '{colors.red.9}',
                            _dark: '{colors.red.9}'
                        }
                    },

                    jade: jade,
                    gray: slate,
                    red: red,
                    green: green
                },

                shadows: shadows,

                radii: {
                    l1: {
                        value: '{radii.xs}'
                    },

                    l2: {
                        value: '{radii.sm}'
                    },

                    l3: {
                        value: '{radii.md}'
                    }
                }
            }
        }
    }
});
