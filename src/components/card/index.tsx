import { type IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.less';
import type { CardProps } from './types';

const Card: React.FC<CardProps> = ({
  compact = false,
  pic,
  title = '',
  body = '',
  actions = [],
}) => {
  return (
    <div className={clsx(styles.cont, compact && styles.sm)}>
      <img className={styles.pic} src={pic} />
      <div className={styles.desc}>
        <h3 className={clsx(styles.title, 'h3Head')}>{title}</h3>
        <p className={styles.body}>{body}</p>
        <div className={styles.actions}>
          {actions.map(a =>
            <a key={a.id} href={a.path} target='_blank' rel="noreferrer">
              <FontAwesomeIcon
                key={a.id}
                icon={a.icon as IconName}
                className={styles.opt}
              />
            </a>,
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
