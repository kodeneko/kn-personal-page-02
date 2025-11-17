import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.less';
import type { TickerProps } from './types';

const TickerCont: React.FC<TickerProps> = ({ labelList }) => {

  return (
    labelList.map(label =>
      <div key={label} className={styles.tag}>
        <FontAwesomeIcon className={styles.icon} icon={faAsterisk} />
        <div className={clsx(styles.label, 'labelLg')}>{label}</div>
      </div>,
    )
  );
};

const Ticker: React.FC<TickerProps> = ({ labelList }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.mov}>
        <TickerCont labelList={labelList} />
        <TickerCont labelList={labelList} />
        <TickerCont labelList={labelList} />
      </div>
    </div>
  );
};

export default Ticker;
