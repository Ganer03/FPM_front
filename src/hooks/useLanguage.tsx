import { useCookies } from "react-cookie";

export const useLanguage = (): [string, (lang: string) => void] => {
  const [cookies, setCookie] = useCookies<string>(["lang"]);

  const setLang = (lang: string): void => {
    setCookie("lang", lang, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return [cookies.lang, setLang];
};
