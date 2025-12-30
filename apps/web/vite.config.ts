import tailwindcss from '@tailwindcss/vite';
import tanstackRouter from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // Order: Tailwind first so subsequent plugins can tweak its generated CSS if needed
        tailwindcss(),
        tanstackRouter({}),
        react(),
        tsconfigPaths()
    ],
    // Remove manual alias since tsconfigPaths handles it, or keep it as backup?
    // Usually tsconfigPaths is enough.
    // keeping manual resolve if it maps something not in tsconfig, but @ -> src is standard.
    // apps/web/tsconfig.json has "@/*": ["src/*"], so it matches.
    // I will remove resolve.alias to avoid conflict or just rely on tsconfigPaths.
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    }
});
