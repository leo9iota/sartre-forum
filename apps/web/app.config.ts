import { resolve } from 'path';

import { defineConfig } from '@solidjs/start/config';

export default defineConfig({
    server: {
        preset: 'bun'
    },
    vite: {
        resolve: {
            alias: {
                '@': resolve(import.meta.dirname, './src'),
                '@styled-system': resolve(import.meta.dirname, './styled-system')
            }
        }
    }
});
