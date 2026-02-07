import { translations, type Language } from './translations';

export const defaultLang: Language = 'en';
export const languages = ['en', 'de'] as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in translations) {
    return lang as Language;
  }
  return defaultLang;
}

export function getStaticPaths() {
  return languages.map((lang) => ({ params: { lang } }));
}
