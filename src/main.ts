import { createApp } from "vue";
import "@/assets/styles/style.css";
import App from "./App.vue";
import pinia from "@/store";
import router from "@/router";
import i18n from "@/locales";
import { componentPligin } from "@/components/index";
import elementplus from "element-plus";
import "element-plus/dist/index.css";
createApp(App)
  .use(pinia)
  .use(componentPligin)
  .use(router)
  .use(i18n)
  .use(elementplus)
  .mount("#app");
