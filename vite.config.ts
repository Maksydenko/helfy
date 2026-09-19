import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

const srcDir = fileURLToPath(new URL('./src', import.meta.url))
const stylesDir = fileURLToPath(new URL('./src/app/styles', import.meta.url))

export default defineConfig({
  css: { preprocessorOptions: { scss: { loadPaths: [stylesDir] } } },
  resolve: { alias: { '@': srcDir } }
})
