import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { rari } from "rari/vite";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  plugins: lazyPlugins(() => [
    rari({
      experimental: {
        useCache: true,
        useCacheRemote: {
          handler: "redis",
          url: "redis://localhost:6379/15",
        },
      },
    }),
    tailwindcss(),
  ]),
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
});
