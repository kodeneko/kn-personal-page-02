import {
  faCircle, faGlobe, faPaintRoller,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx } from 'clsx';
import type React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './styles.module.less';
import type { MenuMainProps } from './types';

const MenuBase: React.FC<MenuMainProps> = ({
  isMobile = false,
  onClose,
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
  const { t } = useTranslation();
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        {isMobile &&
          <div className={styles.close} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        }
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
              <Link
                className={clsx(styles.ele, 'labelMd', o.id === optSel && styles.sel)}
                to={o.path as string}
                onClick={() => changeOpt(o.id)}
              >
                {t(`labels.${o.id}`)}
              </Link>
            </li>,
          )}
        </ul>
      </div>
    </div>
  );
};

export default MenuBase;
