import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For remote development only. Comment out the line below if running React the application locally. 
  base: "/preview"
})
