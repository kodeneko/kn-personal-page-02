import type { ColorTheme } from '../../models/ColorTheme';
import type { Langs } from '../../models/Langs';
import type { MainMenuOpt } from '../../models/MainMenuOpt';

type MenuMainProps = {
  menu: MainMenuOpt[];
  langList: Langs[];
  menuColor: ColorTheme[];
  optSel: MainMenuOpt['id'];
  lang: Langs;
  color: ColorTheme;
  changeLang: (lang: Langs) => void;
  changeColor: (color: ColorTheme) => void;
};

export type { MenuMainProps };
