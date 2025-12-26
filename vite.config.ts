import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/profile/ppt/",
  build: {
    outDir: "dist/ppt"
  }
});
