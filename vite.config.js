import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/OKATI/', // 👈 Your repo name, ensure this is correct
});