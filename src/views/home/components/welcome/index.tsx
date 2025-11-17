import clsx from 'clsx';
import { motion as m } from 'motion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import picMe from '../../../../assets/avatar-real.png';
import { useRefSection } from '../../../../hooks/useRefSection';
import type { AppStore } from '../../../../models/AppStore';
import useAppStore from '../../../../store/app';
import styles from './styles.module.less';
import type { WelcomeSecProps } from './types';

const WelcomeSec: React.FC<WelcomeSecProps> = () => {
  const { t } = useTranslation();
  const { setActiveOpt } = useAppStore();
  const ref = useRefSection('welcome');
  const handleClickMsg = (id: keyof AppStore['sections']) => {
    setActiveOpt(id);
  };

  return (
    <>
      <div className={styles.cont}>
        <m.div
          className={styles.left}
          initial={{ opacity: 0, transform: 'translateX(-1rem)' }}
          whileInView={{ opacity: 1, transform: 'translateX(0)' }}
          viewport={{
            once: true,
            amount: 'some',
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
        >
          <div ref={ref} className={clsx(styles.salute, 'h2HeadNun')}>{t('welcome.salute')}</div>
          <div className={clsx(styles.iam, 'h1Head')}>{t('welcome.iam')}</div>
          <div className={styles.job}>{t('welcome.job')}</div>
          <div className={styles.desc}>{ t('welcome.desc') }</div>
        </m.div>
        <m.div
          className={styles.right}
          initial={{ opacity: 0, transform: 'translateX(1rem)' }}
          whileInView={{ opacity: 1, transform: 'translateX(0)' }}
          viewport={{
            once: true,
            amount: 'some',
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
        >
          <img className={styles.pic} src={picMe} />
          <div className={styles.text}>
            <button className={clsx(styles.label, styles.t01)} onClick={() => handleClickMsg('links')}>{ t('welcome.msg01') }</button>
            <button className={clsx(styles.label, styles.t02)} onClick={() => handleClickMsg('links')}>{t('welcome.msg02')}</button>
          </div>
        </m.div>
      </div>
    </>
  );
};

export default WelcomeSec;
