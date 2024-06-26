import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//  https://vitejs.dev/config/,
export default defineConfig({

  plugins: [react()],
  // build: {
  //   outDir: 'dist'
  // },

  server: {
    proxy: {
      // je api endpoint dia start hobe seta bujia diar jonno
      '/api/': {
        //target: 'http://localhost:8000',

        target: 'https://crud-application-using-mongodb-express.onrender.com',

        // To avoid SSL/TLS certificate verification process. 
        changeOrigin: true,
        secure: false, // This option allows to ignore SSL issues // default false
        //rewrite: (path) => path.replace(/^\/api/, '/api'),
        // secure: true,
        // target: `http://localhost:${process.env.VITE_PORT}` no need
      }
    }
  }
})
