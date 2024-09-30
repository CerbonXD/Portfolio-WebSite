import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

import EnUsLng from "/public/assets/locales/en_us/translation.json"
import PtBrLng from "/public/assets/locales/pt_br/translation.json"

const fallbackLng = ["en_us"];

const resources = {
    "en_us": {
        "translation": EnUsLng
    },
    "pt_br": {
        "translation": PtBrLng
    }
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,
        detection: {
            checkWhitelist: true,
        },
        debug: false,
        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
    });

export default i18n;