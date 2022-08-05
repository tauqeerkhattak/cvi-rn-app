// // import * as Localization from 'expo-localization';
// import * as RNLocalize from 'react-native-localize';
// import i18n from 'i18n-js';
// import en from '../languages/en.json';
// import zh from '../languages/zh.json';

// // Set the key-value pairs for the different languages you want to support.
// i18n.translations = {
//   en: en,
//   zh: zh,
// };

// const currentLocales = RNLocalize.getLocales();
// console.log('currentLocales ==>', currentLocales);
// // Set the locale once at the beginning of your app.
// i18n.locale = currentLocales[0] ? currentLocales[0].languageTag : 'en';
// // When a value is missing from a language it'll fallback to another language with the key present.
// i18n.fallbacks = true;

// export const toggleLocale = () => {
//   console.log('i18n.locale', i18n.locale);
//   if (i18n.locale.includes('en')) {
//     i18n.locale = 'zh';
//   } else {
//     i18n.locale = 'en';
//   }
// };

// // if (i18n.locale === 'en' || i18n.locale === 'en-US') {
// //   i18n.locale = 'zh'
// // } else if (i18n.locale === 'zh') {
// //   i18n.locale = 'en'
// // } else {}

// export default i18n;


import * as Localization from 'react-native-localization';
import i18n from 'i18n-js';
import en from '../languages/en.json';
import zh from '../languages/zh.json';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: en,
  zh: zh,
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export const toggleLocale = () => {
  console.log('i18n.locale', i18n.locale)
  if (!!i18n.locale && i18n.locale.includes('en')) {
    i18n.locale = 'zh'
  } else {
    i18n.locale = 'en'
  }
  
  };

export default i18n;