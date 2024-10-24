import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    // Include font file extensions to avoid warnings
    assetsInclude: ['**/*.otf', '**/*.woff', '**/*.woff2', '**/*.ttf'],
    build: {
        // Emit smaller chunks to prevent large file warnings
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor'; // Split vendor files
                    }
                },
            },
        },
        // File size limit for emitted chunks
        chunkSizeWarningLimit: 500, // Increase the limit (default is 500 KB)
    },
});
