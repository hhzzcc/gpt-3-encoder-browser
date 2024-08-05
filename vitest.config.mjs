/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
        all: true,
        enabled: true,
        reporter: ["text", "html"],
        exclude: ["core/index.js"],
        include: ["core/**/*.js"]
    }
  },
})
