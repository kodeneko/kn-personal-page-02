import type { ColorTheme } from './ColorTheme';
import type { Langs } from './Langs';

type AppStore = {
  theme: ColorTheme,
  lang: Langs,
  setTheme: (color: ColorTheme) => void,
  setLang: (lang: Langs) => void
};

export type { AppStore };
