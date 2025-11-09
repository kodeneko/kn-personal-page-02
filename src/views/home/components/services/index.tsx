import React from 'react';

import Card from '../../../../components/card';
import { serviceList } from '../../../../globals/services';
import styles from './styles.module.less';
import type { ServicesSecProps } from './types';


const ServicesSec: React.FC<ServicesSecProps> = () => {
  return (
    <div className={styles.cont}>
      {serviceList.map(s => <Card key={s.id} {...s} />)}
    </div>
  );
};

export default ServicesSec;
