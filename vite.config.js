import { resolve } from "path";

export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        catalog: resolve(__dirname, "src/catalog.html"),
        "product-page": resolve(__dirname, "src/product-page.html"),
      },
    },
  },
};
