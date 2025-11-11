import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import ButtonSq from '../../../../components/button-sq';
import Card from '../../../../components/card';
import { portfolioList } from '../../../../globals/portfolio';
import { useRefSection } from '../../../../hooks/useRefSection';
import styles from './styles.module.less';
import type { PortfolioSecProps } from './types';

const HALF_CARD = 300 / 2;

const PortfolioSec: React.FC<PortfolioSecProps> = () => {
  const { t } = useTranslation();
  const ref = useRefSection('portfolio');
  const refProjects = useRef<HTMLDivElement>(null);
  const refInner = useRef<HTMLDivElement>(null);
  const [move, setMove] = useState(0);
  const maxRightMovement = useRef(0);

  useEffect(() => {
    if (refProjects.current && refInner.current) {
      const projectsWidth = refProjects.current.offsetWidth;
      const innerWidth = refInner.current.offsetWidth;
      const diff = innerWidth - projectsWidth;
      maxRightMovement.current = diff;
    }
  }, [refProjects.current, refInner.current]);

  const handleArrow = (direction: number) => {
    if (direction === -1 && move === 0)
      return;
    else if (direction === 1 && move > maxRightMovement.current)
      return;
    setMove(move + direction);
  };
  const calcMove = (move: number) => move * HALF_CARD * (-1);

  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <h2 ref={ref} className='h2HeadPac'>{ t('portfolio.title') }</h2>
        <div className={styles.btns}>
          <ButtonSq onClick={() => handleArrow(-1)} icon="fa-solid fa-caret-left" />
          <ButtonSq onClick={() => handleArrow(1)} icon="fa-solid fa-caret-right" />
        </div>
      </div>
      <div ref={refProjects} className={styles.projects}>
        <div ref={refInner} className={styles.inner} style={{ transform: `translateX(${calcMove(move)}px)` }}>
          {portfolioList.map(p =>
            <Card
              key={p.id}
              pic={p.pic}
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
