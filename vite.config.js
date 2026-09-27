import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9000,
    open: true
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'vue-vendor', test: /node_modules\/(vue|vue-router|pinia)\// },
            { name: 'element-plus', test: /node_modules\/(element-plus|@element-plus\/icons-vue)\// },
          ],
        },
      },
    },
  },
})
