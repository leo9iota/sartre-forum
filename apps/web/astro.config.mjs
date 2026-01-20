// @ts-check
import solidJs from '@astrojs/solid-js';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Forces restart
export default defineConfig({
    integrations: [solidJs()],
    vite: {
        plugins: [vanillaExtractPlugin()]
    }
});
