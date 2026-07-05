import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps built asset paths relative so the site works both at
// https://ayusha-147.github.io/ayusha-portfolio/ and at a custom domain root.
export default defineConfig({
  plugins: [react()],
  base: './',
})
