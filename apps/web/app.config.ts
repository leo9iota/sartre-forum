import { resolve } from 'path';

import { defineConfig } from '@solidjs/start/config';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    server: {
        preset: 'bun'
    },
    vite: {
        plugins: [vanillaExtractPlugin()],
        resolve: {
            alias: {
                '@': resolve(import.meta.dirname, './src')
            }
        }
    }
});
