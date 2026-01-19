import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import node from '@astrojs/node';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'node:path';

export default defineConfig({
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
