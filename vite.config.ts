import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { BASE_PATH } from './src/constants'

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_PATH,
  plugins: [react({ plugins: [["@swc-jotai/react-refresh", {}]] })],
})
