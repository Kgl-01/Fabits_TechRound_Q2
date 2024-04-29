import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import stylexPlugin from "@stylexjs/rollup-plugin"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        stylexPlugin({
          fileName: "stylex.css",
          dev: false,
          unstable_moduleResolution: {
            type: "commonJS",
            rootDir: path.resolve(),
          },
        }),
      ],
    },
  },
  plugins: [react({ babel: { configFile: true } })],
})
