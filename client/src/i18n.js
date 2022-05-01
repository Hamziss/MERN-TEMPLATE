import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from './translations/EN.json'
import FR from './translations/FR.json'

const resources = {
    EN: {
        translation: EN
    },
    FR: {
        translation: FR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "EN",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;