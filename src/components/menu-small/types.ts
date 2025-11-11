import type { MenuOpt } from '../../models/MenuOpt';

type MenuSmallProps = {
  menu: MenuOpt[];
  optSel: MenuOpt['id'];
  selectOpt: (opt: MenuOpt['id']) => void
};

export type { MenuSmallProps };
