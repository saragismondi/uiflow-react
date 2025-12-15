import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base URL para deployment en subdirectorio
  // Cambiar según donde vayas a deployar:
  // - '/' para root (ej: https://ui-flow.com/)
  // - '/react/' para subdirectorio (ej: https://ui-flow.com/react/)
  base: '/react/',
})
