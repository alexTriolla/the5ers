import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Checker from "vite-plugin-checker";
import { fileURLToPath } from "url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    react(),
    Checker({
      typescript: true, // Enable TypeScript type checking
    }),
  ],
});
