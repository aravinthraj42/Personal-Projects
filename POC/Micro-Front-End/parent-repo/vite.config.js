import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        appA: "http://localhost:3001/assets/remoteEntry.js",
        appB: "http://localhost:3002/assets/remoteEntry.js",
        appC: "http://localhost:3003/assets/remoteEntry.js",
        appD: "http://localhost:3004/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});