import { createI18n } from "vue-i18n";
import en from "./lang/en.json";
import th from "./lang/th.json";
import ja from "./lang/ja.json";
import cn from "./lang/cn.json";

const messages = {
  en,
  th,
  ja,
  cn
};

const currentLocale = localStorage.getItem("locale");

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  warnHtmlMessage: false,
  locale: currentLocale, // set locale
  fallbackLocale: "en", // set fallback locale
  messages,
});

export default i18n;
