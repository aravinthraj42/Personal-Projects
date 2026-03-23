import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "appC",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});