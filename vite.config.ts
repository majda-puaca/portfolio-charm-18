import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: ["/", "/work", "/about", "/contact"],
    },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/work", prerender: { enabled: true } },
      { path: "/about", prerender: { enabled: true } },
      { path: "/contact", prerender: { enabled: true } },
    ],
  },
});
