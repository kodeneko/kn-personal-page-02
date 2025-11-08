import type React from 'react';

import MenuBase from './menu-base';
import styles from './styles.module.less';
import type { MenuMainProps } from './types';

const MenuMain: React.FC<MenuMainProps> = (props) => {
  return (
    <div className={styles.contDesk}>
      <MenuBase {...props} />
    </div>
  );
};

export default MenuMain;
