import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.less';
import type { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => {
  return (
    props.textarea ?
      <textarea className={clsx(styles.cont, 'labelMd')} rows={10} {...props}></textarea> :
      <input className={clsx(styles.cont, 'labelMd')} {...props} />
  );
};

export default Input;
