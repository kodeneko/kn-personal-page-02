import type { IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { linkList } from '../../../../globals/links';
import { useRefSection } from '../../../../hooks/useRefSection';
import styles from './styles.module.less';
import type { PortfolioSecProps } from './types';

const LinksSec: React.FC<PortfolioSecProps> = () => {
  const ref = useRefSection('links');

  return (
    <div className={styles.cont}>
      <h2 ref={ref} className='h2HeadPac'>Links</h2>
      <ul className={styles.list}>
        {linkList.map(l => (
          <li key={l.id}>
            <a className={styles.label} href={l.path} target='_blank' rel="noreferrer">
              <FontAwesomeIcon className={styles.icon} icon={l.icon as IconName} />
              <div>{ l.id }</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksSec;
