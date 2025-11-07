import type { ColorTheme } from '../../models/ColorTheme';
import type { Langs } from '../../models/Langs';
import type { MainMenuOpt } from '../../models/MainMenuOpt';

type MenuMainProps = {
  optList: MainMenuOpt[];
  langList: Langs[];
  colorList: ColorTheme[];
  optSel: MainMenuOpt['id'];
  langSel: Langs;
  colorSel: ColorTheme;
  changeLang: (lang: Langs) => void;
  changeColor: (color: ColorTheme) => void;
};

export type { MenuMainProps };
