import type { ColorTheme } from '../../models/ColorTheme';
import type { Langs } from '../../models/Langs';
import type { MenuOpt } from '../../models/MenuOpt';

type MenuMainProps = {
  optList: MenuOpt[];
  langList: Langs[];
  colorList: ColorTheme[];
  optSel: MenuOpt['id'];
  langSel: Langs;
  colorSel: ColorTheme;
  changeOpt: (opt: MenuOpt['id']) => void;
  changeLang: (lang: Langs) => void;
  changeColor: (color: ColorTheme) => void;
};

export type { MenuMainProps };
