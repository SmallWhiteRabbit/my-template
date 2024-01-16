import { createApp } from "vue";
import "@/assets/styles/style.scss";
import elementplus from "element-plus";
import App from "./App.vue";
import pinia from "@/store";
import router from "@/router";
import i18n from "@/locales";
import { componentPligin } from "@/components/index";
import "@/mock";
createApp(App)
  .use(pinia)
  .use(componentPligin)
  .use(router)
  .use(i18n)
  .use(elementplus)
  .mount("#app");
