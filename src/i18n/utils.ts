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

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

export function getStaticPaths() {
  return languages.map((lang) => ({ params: { lang } }));
}
