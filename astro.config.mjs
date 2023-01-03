import { defineConfig } from 'astro/config'

export default defineConfig({
  build: {
    format: 'file',
  },
  server: {
    host: true,
    port: 8080,
  },
  vite: {
    server: {
      host: '0.0.0.0',
      open: true,
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (info) => {
            let extension = info.name.split('.').at(1)

            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extension)) {
              extension = 'img'
            } else if (/css/i.test(extension)) {
              return 'assets/app[extname]'
            }

            return `assets/${extension}/[name].[hash][extname]`
          },
          chunkFileNames: 'assets/[hash].js',
          entryFileNames: 'assets/[hash].js',
        },
      },
    },
  },
})
