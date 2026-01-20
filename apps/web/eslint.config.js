import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import solid from 'eslint-plugin-solid/configs/typescript';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        ...solid
    },
    eslintConfigPrettier,
    {
        ignores: ['dist/', 'node_modules/', '.astro/']
    },
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_'
                }
            ],
            '@typescript-eslint/no-explicit-any': 'warn'
        }
    }
);
