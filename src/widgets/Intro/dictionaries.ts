import "server-only";

const dictionaries: { [key: string]: () => object } = {
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  cn: () => import("./dictionaries/cn.json").then((module) => module.default),
};

export interface IIntroDict {
  facultyName: string;
  universityName: string;
  subtitle: string;
  contactButtonText: string;
}
export const getDictionary = async (locale: string): Promise<IIntroDict> =>
  dictionaries[locale]() as IIntroDict;
