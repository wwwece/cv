import i18n from 'i18next';
import route from './en/route.json';
import action from './en/action.json';
import common from './en/common.json';
import { initReactI18next } from 'react-i18next';

const DEFAULT_LANG = 'en';

export const resources = {
  en: {
    route,
    action,
    common,
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
