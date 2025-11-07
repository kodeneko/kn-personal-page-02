import {
  faCircle, faGlobe, faPaintRoller,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx } from 'clsx';
import type React from 'react';

import styles from './styles.module.less';
import type { MenuMainProps } from './types';

const MenuMain: React.FC<MenuMainProps> = ({
  optList,
  langList,
  colorList,
  optSel,
  langSel = 'es',
  colorSel = 'purple',
  changeOpt,
  changeLang,
  changeColor,
}) => {
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <div className={styles.lang}>
          <FontAwesomeIcon className={styles.icon} icon={faGlobe} />
          <div className={styles.optSet}>
            {langList.map(l =>
              <div
                key={l}
                className={clsx(styles.opt, 'labelMd', l === langSel && styles.sel)}
                onClick={() => changeLang(l)}
              >
                {l}
              </div>,
            )}
          </div>
        </div>
        <div className={styles.color}>
          <FontAwesomeIcon className={styles.icon} icon={faPaintRoller} />
          <div className={styles.optSet}>
            {colorList.map(c =>
              <FontAwesomeIcon
                className={clsx(styles.opt, styles[c])}
                key={c}
                onClick={() => changeColor(c)}
                icon={faCircle}
              />,
            )}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <ul className={styles.list}>
          {optList.map(o =>
            <li key={o.id}>
              <a
                className={clsx(styles.ele, 'labelMd', o.id === optSel && styles.sel)}
                href={o.path}
                onClick={() => changeOpt(o.id)}
              >
                {o.id}
              </a>
            </li>,
          )}
        </ul>
      </div>
    </div>
  );
};

export default MenuMain;
