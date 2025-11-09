import React from 'react';

import styles from './styles.module.less';
import type { WelcomeSecProps } from './types';

const WelcomeSec: React.FC<WelcomeSecProps> = () => {
  return (
    <div className={styles.cont}>
      Welcome
    </div>
  );
};

export default WelcomeSec;
