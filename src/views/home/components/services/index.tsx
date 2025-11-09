import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../../components/card';
import { serviceList } from '../../../../globals/services';
import styles from './styles.module.less';
import type { ServicesSecProps } from './types';


const ServicesSec: React.FC<ServicesSecProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.cont}>
      {serviceList.map(s =>
        <Card key={s.id} body={t(`services.${s.id}`)} {...s} />)
      }
    </div>
  );
};

export default ServicesSec;
