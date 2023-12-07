import { createI18n } from "vue-i18n";
import zhCn from "./zh-cn";
import en from "./en";

// let currentLanguage = navigator.language;
const currentLanguage = localStorage.getItem("locale") || "en";

const i18n = createI18n({
  locale: currentLanguage, // 初始化配置语言
  legacy: false,
  messages: {
    "zh-CN": zhCn,
    en,
  },
});
export const langs = [
  { key: "en", title: "English" },
  { key: "zh-CN", title: "简体中文 ", desc: "Chinese (Simplified)" },
];

export default i18n;
