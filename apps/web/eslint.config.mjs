import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import solid from 'eslint-plugin-solid/configs/typescript';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        ...solid,
        languageOptions: {
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: import.meta.dirname
            }
        }
    },
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
            ]
        }
    },
    {
        ignores: ['dist/**', '.output/**', '.vinxi/**', 'node_modules/**', 'eslint.config.mjs']
    },
    prettier
);
