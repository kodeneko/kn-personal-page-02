import React from 'react';

import styles from './styles.module.less';
import type { BioSecProps } from './types';

const BioSec: React.FC<BioSecProps> = () => {
  return (
    <div className={styles.cont}>
      <div></div>
      <div></div>
    </div>
  );
};

export default BioSec;
