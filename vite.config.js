import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  // GitHub Pages uses the repository name.
  // Vercel and custom domains use "/".
  base:
    mode === "production" && process.env.GITHUB_ACTIONS
      ? "/mclean-edge-store/"
      : "/",
}));