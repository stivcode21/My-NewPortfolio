// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_es from "@/translate/es/global.json";
import global_en from "@/translate/en/global.json";
import header_es from "@/translate/es/header.json";
import header_en from "@/translate/en/header.json";
import projects_es from "@/translate/es/projects.json";
import projects_en from "@/translate/en/projects.json";

i18n
  .use(initReactI18next) // ¡Esto es crucial!
  .init({
    interpolation: { escapeValue: false },
    lng: "es",
    fallbackLng: "en",
    resources: {
      en: {
        global: global_en,
        header: header_en,
        projects: projects_en,
      },
      es: {
        global: global_es,
        header: header_es,
        projects: projects_es,
      },
    },
  });

export default i18n;
