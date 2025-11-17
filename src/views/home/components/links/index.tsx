import type { IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion as m, stagger } from 'motion/react';
import React from 'react';

import { linkList } from '../../../../globals/links';
import { useRefSection } from '../../../../hooks/useRefSection';
import styles from './styles.module.less';
import type { PortfolioSecProps } from './types';

const varFather = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: stagger(1) },
  },
};

const varChild = {
  hidden: { opacity: 0, translateX: '2rem' },
  show: { opacity: 1, translateX: '0rem' },
};

const LinksSec: React.FC<PortfolioSecProps> = () => {
  const ref = useRefSection('links');

  return (
    <div className={styles.cont}>
      <m.h2
        ref={ref}
        className='h2HeadPac'
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
        Links
      </m.h2>
      <m.ul
        className={styles.list}
        variants={varFather}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{
          once: true,
          amount: 'some',
        }}
      >
        {linkList.map(l => (
          <m.li
            key={l.id}
            variants={varChild}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{
              once: true,
              amount: 'some',
            }}
          >
            <a className={styles.label} href={l.path} target='_blank' rel="noreferrer">
              <FontAwesomeIcon className={styles.icon} icon={l.icon as IconName} />
              <div>{ l.id }</div>
            </a>
          </m.li>
        ))}
      </m.ul>
    </div>
  );
};

export default LinksSec;
