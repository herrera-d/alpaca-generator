import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), typescript()],

  root: "./",
  base: "/alpaca-generator/",
  build: {
    assetsDir: "./public",
  },
});
