import path from 'node:path';

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
                '@': path.resolve(import.meta.dirname, 'src')
            }
        }
    }
});
