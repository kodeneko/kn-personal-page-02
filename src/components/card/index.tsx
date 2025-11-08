import { type IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.less';
import type { CardProps } from './types';

const Card: React.FC<CardProps> = ({
  pic,
  title,
  body,
  actions,
}) => {
  return (
    <div className={styles.cont}>
      <img className={styles.pic} src={pic} />
      <div className={styles.desc}>
        <h3 className={clsx(styles.title, 'h3Head')}>{title}</h3>
        <p className={styles.body}>{body}</p>
        <div className={styles.actions}>
          {actions.map(a =>
            <FontAwesomeIcon
              key={a.id}
              icon={a.icon as IconName}
              className={styles.opt}
            />,
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
