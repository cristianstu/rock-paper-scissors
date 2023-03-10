import { derived, writable } from 'svelte/store';
import translations from './translations';

export enum Locale {
  en = 'en',
  es = 'es'
}

const nav = globalThis.navigator || { language: Locale.en };
const detectedLang = (nav.language || Locale.en).split('-')[0];
const defaultLang = detectedLang === Locale.es ? Locale.es : Locale.en;

export const locale = writable<Locale>(defaultLang);
export const locales = Object.keys(translations);

function translate(locale: Locale, key: string, vars: Record<string, string>) {
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error('no key provided to $t()');
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = translations[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, 'g');
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(
  locale,
  ($locale) =>
    (key: string, vars = {}) =>
      translate($locale, key, vars)
);
