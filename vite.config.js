import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // autorise les connexions extérieures (ex: ngrok)
    port: 5173,
    allowedHosts: ['eda8b14c7b5a.ngrok-free.app'], // ajoute ici ton domaine ngrok
  },
});
