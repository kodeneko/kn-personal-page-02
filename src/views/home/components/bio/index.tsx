import { motion as m } from 'motion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import avatar from '../../../../assets/avatar-real.png';
import { useRefSection } from '../../../../hooks/useRefSection';
import styles from './styles.module.less';
import type { BioSecProps } from './types';

const BioSec: React.FC<BioSecProps> = () => {
  const { t } = useTranslation();
  const ref = useRefSection('about');
  return (
    <div ref={ref} className={styles.cont}>
      <div className={styles.inner}>
        <m.div
          className={styles.left}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 'some',
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
        >
          <img src={avatar} />
        </m.div>
        <m.div
          className={styles.right}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 'some',
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
        >
          <h3 className="h2HeadPac">{ t('bio.title') }</h3>
          <p>{ t('bio.desc') }</p>
        </m.div>
      </div>
    </div>
  );
};

export default BioSec;
