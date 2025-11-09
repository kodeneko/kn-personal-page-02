import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import pic from '../../../../assets/screen-ia.png';
import MenuSmall from '../../../../components/menu-small';
import { frontendList, skillsMenuList } from '../../../../globals/skills';
import type { MenuOpt } from '../../../../models/MenuOpt';
import styles from './styles.module.less';
import type { SkillsSecProps } from './types';

const SkillsSec: React.FC<SkillsSecProps> = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState<string[]>(frontendList);
  const handleClick = (id: MenuOpt['id']) => setSkills(
    skillsMenuList
      .find(sm => sm.id === id)
      ?.skills as string[],
  );
  return (
    <div className={styles.cont}>
      <div className={styles.inner}>
        <h2 className='h2HeadPac'>{t('skills.title')}</h2>
        <MenuSmall
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
      </div>
    </div>
  );
};

export default SkillsSec;
