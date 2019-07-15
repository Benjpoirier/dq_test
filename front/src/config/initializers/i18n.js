import detector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

i18n.use(XHR)
    .use(detector)
    .init({
        ns: ['common'],
        defaultNS: 'common',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        load: 'languageOnly',
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true,
        },
    });

export default i18n;
