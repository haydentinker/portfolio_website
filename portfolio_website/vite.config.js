import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true,
    port:3000,
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  test:{
    globals:true,
    environment:'happy-dom',
    // setupFiles:'./setupTests.js'
  }
})
