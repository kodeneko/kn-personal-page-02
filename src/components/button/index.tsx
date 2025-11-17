import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.less';
import type { ButtonProps } from './types';

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {
  return (
    <button className={clsx(styles.cont, 'labelLgBold')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
