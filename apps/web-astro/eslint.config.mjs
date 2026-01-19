import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import solid from 'eslint-plugin-solid';
import globals from 'globals';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname
            },
            globals: {
                ...globals.browser,
                ...globals.node 
            }
        },
        plugins: {
            '@typescript-eslint': ts,
            solid
        },
        rules: {
            ...ts.configs.recommended.rules,
            ...solid.configs.typescript.rules,
            // Helper specific rules
            'solid/reactivity': 'warn',
            'solid/no-destructure': 'warn',
            'solid/jsx-no-undef': 'error'
        }
    },
    {
        files: ['**/*.astro'],
        languageOptions: {
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.astro']
            }
        },
        rules: {
            // Override specific rules for Astro files if needed
        }
    },
    {
        ignores: ['dist/', '.astro/', 'node_modules/']
    }
];
