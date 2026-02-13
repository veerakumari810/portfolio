import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // ← ఇది ముఖ్యం: root కోసం '/' పెట్టాలి
})