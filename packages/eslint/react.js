import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';

import { baseConfig } from './base.js';

export const reactConfig = [
    ...baseConfig,
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        plugins: {
            ...pluginReact.configs.flat.recommended.plugins,
            ...jsxA11y.flatConfigs.recommended.plugins
        },
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            globals: {
                ...pluginReact.configs.flat.recommended.languageOptions.globals
            }
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            ...pluginReact.configs.flat['jsx-runtime'].rules,
            ...jsxA11y.flatConfigs.recommended.rules,
            'react/no-unknown-property': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'jsx-a11y/alt-text': [
                'warn',
                {
                    elements: ['img'],
                    img: ['Image']
                }
            ],
            'jsx-a11y/aria-props': 'warn',
            'jsx-a11y/aria-proptypes': 'warn',
            'jsx-a11y/aria-unsupported-elements': 'warn',
            'jsx-a11y/role-has-required-aria-props': 'warn',
            'jsx-a11y/role-supports-aria-props': 'warn',
            'react/jsx-no-target-blank': 'off',
            'react/no-children-prop': [
                'error',
                {
                    allowFunctions: true
                }
            ]
        }
    }
];
