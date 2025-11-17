import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.less';
import type { FooterProps } from './types';

const FooterMain: React.FC<FooterProps> = () => {
  return (
    <footer className={clsx(styles.cont, 'labelLgBold')}>
      Kodeneko @ 2025
    </footer>
  );
};

export default FooterMain;
