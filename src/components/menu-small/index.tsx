import { type IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.less';
import type { MenuSmallProps } from './types';

const MenuSmall: React.FC<MenuSmallProps> = ({
  menu,
  optSel,
  selectOpt,
}) => {
  return (
    <nav className={styles.cont}>
      <ul>
        {menu.map(opt =>
          <li key={opt.id} className={clsx(styles.opt, optSel === opt.id && styles.act)} onClick={() => selectOpt(opt.id)}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={opt.icon as IconName}
            />
            <div className={clsx(styles.label, 'labelLgBold')}>{opt.id}</div>
          </li>,
        )}
      </ul>
    </nav>
  );
};

export default MenuSmall;
