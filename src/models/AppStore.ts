import type { ColorTheme } from './ColorTheme';
import type { Langs } from './Langs';

type AppStore = {
  theme: ColorTheme,
  lang: Langs,
  optMenu: keyof AppStore['sections'],
  sections: {
    welcome?: HTMLElement,
    services?: HTMLElement,
    about?: HTMLElement,
    skills?: HTMLElement,
    links?: HTMLElement,
    portfolio?: HTMLElement,
    contact?: HTMLElement,
  },
  setTheme: (color: ColorTheme) => void,
  setLang: (lang: Langs) => void,
  setSection: (name: keyof AppStore['sections'], ele: HTMLElement) => void,
  setActiveOpt: (name: keyof AppStore['sections']) => void
};

export type { AppStore };
