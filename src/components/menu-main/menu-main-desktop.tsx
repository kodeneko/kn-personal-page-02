import type React from 'react';

import MenuBase from './menu-base';
import type { MenuMainProps } from './types';

const MenuMainDesktop: React.FC<MenuMainProps> = (props) => {
  return (
    <MenuBase {...props} />
  );
};

export default MenuMainDesktop;
