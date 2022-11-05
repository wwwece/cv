import i18n from 'i18next';
import route from './en/route.json';
import action from './en/action.json';
import aboutMe from './en/aboutMe.json';
import { initReactI18next } from 'react-i18next';

const DEFAULT_LANG = 'en';

export const resources = {
  en: {
    route,
    action,
    aboutMe,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: DEFAULT_LANG,

  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
