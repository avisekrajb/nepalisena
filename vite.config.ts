import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  envPrefix: "VITE_",
});
