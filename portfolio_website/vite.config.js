import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3000,
  },
  watch: {
    usePolling: true
  },
  host:true,
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  test:{
    globals:true,
    environment:'happy-dom',
  }
})
