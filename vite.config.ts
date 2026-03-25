import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          input: {
            index:                path.resolve(__dirname, 'index.html'),
            about:                path.resolve(__dirname, 'about.html'),
            contact:              path.resolve(__dirname, 'contact.html'),
            locations:            path.resolve(__dirname, 'locations.html'),
            menu:                 path.resolve(__dirname, 'menu.html'),
            'location-goteborg':  path.resolve(__dirname, 'location-goteborg.html'),
            'location-huddinge':  path.resolve(__dirname, 'location-huddinge.html'),
            'location-kista':     path.resolve(__dirname, 'location-kista.html'),
            'location-skarholmen':path.resolve(__dirname, 'location-skarholmen.html'),
            'location-uppsala':   path.resolve(__dirname, 'location-uppsala.html'),
            'artikel-goteborg':   path.resolve(__dirname, 'artikel-goteborg.html'),
            'artikel-halal':      path.resolve(__dirname, 'artikel-halal.html'),
          }
        }
      }
    };
});
