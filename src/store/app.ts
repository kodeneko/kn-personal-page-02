import { create } from 'zustand';

import type { AppStore } from '../models/AppStore';
import type { ColorTheme } from '../models/ColorTheme';
import type { Langs } from '../models/Langs';

const useAppStore = create<AppStore>((set) => ({
  theme: 'purple',
  lang: 'en',
  sections: {},
  optMenu: 'welcome',
  setTheme: (color: ColorTheme) => set((state) => ({ ...state, theme: color })),
  setLang: (lang: Langs) => set((state) => ({ ...state, lang })),
  setSection: (name: keyof AppStore['sections'], ele: HTMLElement) => {
    set((state) => {
      state.sections[name] = ele;
      return state;
    });
  },
  setActiveOpt: (name: keyof AppStore['sections']) => {
    set((state) => {
      state.sections[name]?.scrollIntoView({ behavior: 'smooth' });
      state.optMenu = name;
      return state;
    });
  },
}));

export default useAppStore;
