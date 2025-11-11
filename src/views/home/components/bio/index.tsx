import React from 'react';
import { useTranslation } from 'react-i18next';

import avatar from '../../../../assets/avatar.png';
import { useRefSection } from '../../../../hooks/useRefSection';
import styles from './styles.module.less';
import type { BioSecProps } from './types';

const BioSec: React.FC<BioSecProps> = () => {
  const { t } = useTranslation();
  const ref = useRefSection('about');
  return (
    <div ref={ref} className={styles.cont}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <img src={avatar} />
        </div>
        <div className={styles.right}>
          <h3 className="h2HeadPac">{ t('bio.title') }</h3>
          <p>{ t('bio.desc') }</p>
        </div>
      </div>
    </div>
  );
};

export default BioSec;
