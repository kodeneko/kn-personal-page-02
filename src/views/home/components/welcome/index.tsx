import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

import picMe from '../../../../assets/avatar-real.png';
import { useRefSection } from '../../../../hooks/useRefSection';
import styles from './styles.module.less';
import type { WelcomeSecProps } from './types';

const WelcomeSec: React.FC<WelcomeSecProps> = () => {
  const { t } = useTranslation();
  const ref = useRefSection('welcome');

  return (
    <>
      <div className={styles.cont}>
        <div className={styles.left}>
          <div ref={ref} className={clsx(styles.salute, 'h2HeadNun')}>{t('welcome.salute')}</div>
          <div className={clsx(styles.iam, 'h1Head')}>{t('welcome.iam')}</div>
          <div className={styles.job}>{t('welcome.job')}</div>
          <div className={styles.desc}>{ t('welcome.desc') }</div>
        </div>
        <div className={styles.right}>
          <img className={styles.pic} src={picMe} />
          <div className={styles.text}>
            <button className={clsx(styles.label, styles.t01)}>{ t('welcome.msg01') }</button>
            <button className={clsx(styles.label, styles.t02)}>{t('welcome.msg02')}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSec;
