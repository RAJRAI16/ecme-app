import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',

      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'icons/*.png'
      ],

      manifest: {
        name: 'MyApp',
        short_name: 'MyApp',
        description: 'My offline-ready React app',

        start_url: '/',
        scope: '/',

        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        orientation: 'portrait',

        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },

      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,

        navigateFallback: '/index.html',

        globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],

        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              networkTimeoutSeconds: 3
            }
          },
          {
            urlPattern: ({ request }) =>
              request.destination === 'script' ||
              request.destination === 'style',
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-assets'
            }
          }
        ]
      }
    })
  ],

  preview: {
    host: true,
    port: 4173
  }
})
