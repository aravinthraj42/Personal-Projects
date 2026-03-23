import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "appD",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3004,
  },
  preview: {
    port: 3004,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});