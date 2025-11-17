import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './styles.module.less';
import type { ButtonSqProps } from './types';

const ButtonSq: React.FC<React.PropsWithChildren<ButtonSqProps>> = ({ icon, onClick }) => {
  return (
    <button className={styles.cont} onClick={onClick}>
      <FontAwesomeIcon className={styles.icon} icon={icon as IconName} />
    </button>
  );
};

export default ButtonSq;
