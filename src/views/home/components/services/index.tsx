import { motion as m, stagger } from 'motion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../../components/card';
import { serviceList } from '../../../../globals/services';
import { useRefSection } from '../../../../hooks/useRefSection';
import styles from './styles.module.less';
import type { ServicesSecProps } from './types';

const varFather = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: stagger(0.5) },
  },
};

const varChild = {
  hidden: { opacity: 0, translateX: '-1rem' },
  show: { opacity: 1, translateX: '0rem' },
};

const ServicesSec: React.FC<ServicesSecProps> = () => {
  const { t } = useTranslation();
  const ref = useRefSection('services');
  return (
    <m.div
      ref={ref}
      className={styles.cont}
      variants={varFather}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 'some',
      }}
    >
      {serviceList.map(s => (
        <m.div key={s.id} variants={varChild} viewport={{
          once: true,
          amount: 'some',
        }}>
          <Card compact body={t(`services.${s.id}`)} {...s} />
        </m.div>
      ))}
    </m.div>
  );
};

export default ServicesSec;
