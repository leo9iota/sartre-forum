import { resolve } from 'path';

import { defineConfig } from '@solidjs/start/config';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    server: {
        preset: 'bun'
    },
    vite: {
        plugins: [tsconfigPaths(), vanillaExtractPlugin()],
        resolve: {
            alias: {
                '@': resolve(import.meta.dirname, './src')
            }
        }
    }
});
