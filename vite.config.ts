import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    vueJsx(), // 支持jsx
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: false })],
      imports: ["vue", "vue-router", "pinia"],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      // less: {
      //   charset: false,
      //   javascriptEnabled: true,
      //   additionalData: `@import "@/assets/styles/variables.less";`,
      // },
      scss: {
        additionalData: `@use "@/assets/styles/variables.scss" as *;`,
      },
    },
  },
});
