import { defineConfig } from '@pandacss/dev';

export default defineConfig({
    preflight: true,
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
    exclude: [],
    theme: {
        extend: {}
    },
    jsxFramework: 'react',
    presets: ['@pandacss/preset-base', '@pandacss/preset-panda', '@park-ui/panda-preset'],
    outdir: 'styled-system'
});
