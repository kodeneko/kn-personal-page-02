import React from 'react';

import { Screen, useMedia } from '../../hooks/useMedia';
import MenuMainDesktop from './menu-main-desktop';
import MenuMainMobile from './menu-main-mobile';
import styles from './styles.module.less';
import type { MenuMainProps } from './types';

const MenuMain: React.FC<MenuMainProps> = (props) => {
  const isTablet = useMedia(Screen.TABLET);
  return (
    <nav className={styles.nav}>
      {isTablet ? <MenuMainMobile {...props} /> : <MenuMainDesktop {...props} />}
    </nav>
  );
};

export default MenuMain;
