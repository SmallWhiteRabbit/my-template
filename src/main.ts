import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pinia from "@/store";
import router from "@/router";
import i18n from "@/locales";
import { componentPligin } from "@/components/index";

createApp(App)
  .use(pinia)
  .use(componentPligin)
  .use(router)
  .use(i18n)
  .mount("#app");
