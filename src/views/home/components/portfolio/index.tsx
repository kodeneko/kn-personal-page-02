import React from 'react';

import styles from './styles.module.less';
import type { PortfolioSecProps } from './types';

const PortfolioSec: React.FC<PortfolioSecProps> = () => {
  return (
    <div className={styles.cont}>
      Portfolio
    </div>
  );
};

export default PortfolioSec;
