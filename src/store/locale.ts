import { defineStore } from "pinia";
import { ref } from "vue";
import i18n from "@/locales";
import zh from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

type ILang = "en" | "zh-CN";

export const useLocaleStore = defineStore("locale", () => {
  const locale = ref<ILang>(i18n.global.locale.value);
  // 设置locale
  function setLocale(lang: ILang) {
    locale.value = lang;
    i18n.global.locale.value = lang;
    localStorage.setItem("locale", lang);
  }

  const getElementPlusLang = () => {
    const locales = {
      "zh-CN": zh,
      en: en,
    };
    return locales[locale.value];
  };
  return { locale, setLocale, getElementPlusLang };
});
