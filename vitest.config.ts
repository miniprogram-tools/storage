/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        include: ['packages/**/__tests__/**/*.test.ts'],
    },
    resolve: {
        alias: {
            '@miniprogram-tools/storage': resolve(__dirname, 'packages/storage/src'),
        },
    },
});
