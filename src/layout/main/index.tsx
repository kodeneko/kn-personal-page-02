import { motion as m } from 'motion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import FooterMain from '../../components/footer-main';
import MenuMain from '../../components/menu-main';
import { mainMenuList } from '../../globals/menu';
import type { AppStore } from '../../models/AppStore';
import { ColorThemeList } from '../../models/ColorTheme';
import { LangList, type Langs } from '../../models/Langs';
import type { MenuOpt } from '../../models/MenuOpt';
import useAppStore from '../../store/app';
import styles from './styles.module.less';

const MainLayout: React.FC = () => {
  const { i18n } = useTranslation();
  const { setActiveOpt, optMenu } = useAppStore();
  const {
    lang, setLang, theme, setTheme,
  } = useAppStore();
  const handleChangeOpt = (opt: MenuOpt['id']) => {
    const id = opt as keyof AppStore['sections'];
    setActiveOpt(id);
  };
  const handleLang = (lang: Langs) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  return (
    <div className={styles.mainLayout}>
      <m.header
        className={styles.header}
        initial={{ opacity: 0, transform: 'translateY(-1rem)' }}
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
        <MenuMain
          optList={mainMenuList}
          langList={LangList}
          colorList={ColorThemeList}
          optSel={optMenu}
          langSel={lang}
          colorSel={theme}
          changeOpt={handleChangeOpt}
          changeLang={handleLang}
          changeColor={setTheme}
        />
      </m.header>
      <main className={styles.main}>
        <Outlet></Outlet>
      </main>
      <FooterMain />
    </div>
  );
};

export default MainLayout;
