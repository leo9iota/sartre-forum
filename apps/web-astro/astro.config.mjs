import path from 'node:path';

import node from '@astrojs/node';
import solid from '@astrojs/solid-js';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'hybrid',
    integrations: [solid()],
    adapter: node({
        mode: 'standalone'
    }),
    vite: {
        plugins: [vanillaExtractPlugin()],
        resolve: {
            alias: {
                '@': path.resolve(process.cwd(), 'src')
            }
        }
    }
});
