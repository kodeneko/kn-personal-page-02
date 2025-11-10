import React from 'react';
import { useTranslation } from 'react-i18next';

import ButtonSq from '../../../../components/button-sq';
import Card from '../../../../components/card';
import { portfolioList } from '../../../../globals/portfolio';
import styles from './styles.module.less';
import type { PortfolioSecProps } from './types';

const PortfolioSec: React.FC<PortfolioSecProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <h2 className='h2HeadPac'>{ t('portfolio.title') }</h2>
        <div className={styles.btns}>
          <ButtonSq icon="fa-solid fa-caret-left" />
          <ButtonSq icon="fa-solid fa-caret-right" />
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.inner}>
          {portfolioList.map(p =>
            <Card
              key={p.id}
              pic={p.pic }
              title={t(`portfolio.${p.id}.title`)}
              body={t(`portfolio.${p.id}.desc`)}
              actions={p.links}
            />,
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSec;
