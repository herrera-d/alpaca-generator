import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/alpaca-generator/",
  build: {
    outDir: "dist",
    assetsDir: "src/assets",
    minify: "esbuild",
    sourcemap: true,
  },
});
