import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../../components/card';
import { serviceList } from '../../../../globals/services';
import { useRefSection } from '../../../../hooks/useRefSection';
import styles from './styles.module.less';
import type { ServicesSecProps } from './types';


const ServicesSec: React.FC<ServicesSecProps> = () => {
  const { t } = useTranslation();
  const ref = useRefSection('services');
  return (
    <div ref={ref} className={styles.cont}>
      {serviceList.map(s =>
        <Card compact key={s.id} body={t(`services.${s.id}`)} {...s} />)
      }
    </div>
  );
};

export default ServicesSec;
