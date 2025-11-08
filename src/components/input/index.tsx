import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.less';
import type { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => {
  return (
    <input className={clsx(styles.cont, 'labelMd')} {...props} />
  );
};

export default Input;
