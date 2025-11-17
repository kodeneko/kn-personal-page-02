import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type React from 'react';
import { useState } from 'react';

import type { MenuOpt } from '../../models/MenuOpt';
import MenuBase from './menu-base';
import styles from './styles.module.less';
import type { MenuMainProps } from './types';

const MenuMainMobile: React.FC<MenuMainProps> = (props) => {
  const [isMenu, setMenu] = useState(false);
  const handleChangeOpt = (opt: MenuOpt['id']) => {
    setMenu(!isMenu);
    props.changeOpt(opt);
  };
  return (
    <>
      {isMenu ?
        <div className={styles.menuMobile}>
          <MenuBase {...props} isMobile={true} changeOpt={handleChangeOpt} onClose={() => setMenu(!isMenu)} />
        </div> :
        <div className={styles.btnMobile} onClick={() => setMenu(!isMenu)}>
          <FontAwesomeIcon className={styles.icon} icon={faBars} />
        </div>
      }
    </>
  );
};

export default MenuMainMobile;
