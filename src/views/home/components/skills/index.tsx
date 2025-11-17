import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion as m } from 'motion/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import pic from '../../../../assets/screen-ia-crop.png';
import MenuSmall from '../../../../components/menu-small';
import { frontendList, skillsMenuList } from '../../../../globals/skills';
import { useRefSection } from '../../../../hooks/useRefSection';
import type { MenuOpt } from '../../../../models/MenuOpt';
import styles from './styles.module.less';
import type { SkillsSecProps } from './types';

const SkillsSec: React.FC<SkillsSecProps> = () => {
  const { t } = useTranslation();
  const ref = useRefSection('skills');
  const [skills, setSkills] = useState<string[]>(frontendList);
  const [opt, setOpt] = useState('frontend');
  const handleClick = (id: MenuOpt['id']) => {
    setOpt(id);
    setSkills(
      skillsMenuList
        .find(sm => sm.id === id)
        ?.skills as string[],
    );
  };
  return (
    <div className={styles.cont}>
      <m.div className={styles.inner}
        initial={{ opacity: 0, transform: 'translateY(2rem)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{
          once: true,
          amount: 'some',
        }}
        transition={{
          delay: 0.2,
          duration: 1,
        }}
      >
        <h2 ref={ref} className='h2HeadPac'>{t('skills.title')}</h2>
        <MenuSmall
          optSel={opt}
          menu={skillsMenuList}
          selectOpt={handleClick}
        />
        <div className={styles.skills}>
          <div className={styles.list}>
            {skills.map(s =>
              <div className={styles.ele} key={s}>
                <FontAwesomeIcon className={styles.icon} icon={faAsterisk} />
                <div className="labelLg">{s}</div>
              </div>,
            )}
          </div>
          <img className={styles.pic} src={pic} />
        </div>
      </m.div>
    </div>
  );
};

export default SkillsSec;
