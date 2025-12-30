import { fixupPluginRules } from '@eslint/compat';
import drizzlePlugin from 'eslint-plugin-drizzle';

import { baseConfig } from '@sartre/eslint-config/base';

export default [
    ...baseConfig,
    {
        plugins: {
            drizzle: fixupPluginRules(drizzlePlugin)
        }
    }
];
