import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type React from 'react';

import MenuBase from './menu-base';
import styles from './styles.module.less';
import type { MenuMainProps } from './types';

const MenuMainMobile: React.FC<MenuMainProps> = (props) => {
  return (
    <div className={styles.contMobile}>
      <FontAwesomeIcon className={styles.icon} icon={faBars} />
      <MenuBase {...props} />
    </div>
  );
};

export default MenuMainMobile;
