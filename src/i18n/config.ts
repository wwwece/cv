import i18n from 'i18next';
import route from './en/route.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    route,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['route'],

  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
