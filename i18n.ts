import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const initI18next = async () => {
  if (!i18n.isInitialized) {
    await i18n
      .use(HttpBackend)
      .use(initReactI18next)
      .init({
        lng: 'en', // Default language
        fallbackLng: 'en', // Fallback language
        debug: process.env.NODE_ENV === 'development', // Debug in dev mode
        ns: ['translation'], // Namespace
        defaultNS: 'translation', // Default namespace
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
        },
        interpolation: {
          escapeValue: false, // React already escapes values
        },
      });
  }
  return i18n;
};

export default initI18next;
