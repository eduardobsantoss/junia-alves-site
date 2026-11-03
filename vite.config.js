import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No build, o site fica em https://eduardobsantoss.github.io/junia-alves-site/; em dev, na raiz.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/junia-alves-site/' : '/',
}))
