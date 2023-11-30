import { fileURLToPath, URL } from 'node:url'
import dotenv from "vite-plugin-dotenv"

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import process from 'node:process'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),dotenv()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define:{
      'process.env':JSON.stringify(env)
    }
    
      }
})

