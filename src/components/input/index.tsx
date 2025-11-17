import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.less';
import type { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  textarea, hint='', ...props
}) => {
  return (
    <div className={styles.outer}>
      {textarea ?
        <textarea className={clsx(styles.cont, 'labelMd')} rows={10} {...props}></textarea> :
        <input className={clsx(styles.cont, 'labelMd')} {...props} />}
      <div className={styles.hint}>{ hint }</div>
    </div>
  );
};

export default Input;
