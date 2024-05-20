export interface Language {
  slug: string;
  imgCode: string;
  localCode: string;
}

export const languages: { [key: string]: Language } = {
  ru: {
    imgCode: "ru",
    slug: "Russian",
    localCode: "РУ",
  },
  en: {
    imgCode: "gb",
    slug: "English",
    localCode: "EN",
  },
  cn: {
    imgCode: "cn",
    slug: "Chinese",
    localCode: "中文",
  },
} as const;
