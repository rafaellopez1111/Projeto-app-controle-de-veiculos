import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração mínima do Vite: apenas habilita o plugin do React (JSX + Fast Refresh).
export default defineConfig({
  plugins: [react()],
})
