import type { MenuOpt } from '../../models/MenuOpt';

type MenuSmallProps = {
  menu: MenuOpt[];
  selectOpt: (opt: MenuOpt['id']) => void
};

export type { MenuSmallProps };
