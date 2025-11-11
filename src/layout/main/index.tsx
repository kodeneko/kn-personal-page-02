import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import FooterMain from '../../components/footer-main';
import MenuMain from '../../components/menu-main';
import { mainMenuList } from '../../globals/menu';
import { ColorThemeList } from '../../models/ColorTheme';
import { LangList, type Langs } from '../../models/Langs';
import useAppStore from '../../store/app';
import styles from './styles.module.less';

const MainLayout: React.FC = () => {
  const { i18n } = useTranslation();
  const [optSel, setOptSel] = useState('welcome');
  const {
    lang, setLang, theme, setTheme,
  } = useAppStore();
  const handleLang = (lang: Langs) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <MenuMain
          optList={mainMenuList}
          langList={LangList}
          colorList={ColorThemeList}
          optSel={optSel}
          langSel={lang}
          colorSel={theme}
          changeOpt={setOptSel}
          changeLang={handleLang}
          changeColor={setTheme}
        />
      </header>
      <main className={styles.main}>
        <Outlet></Outlet>
      </main>
      <FooterMain />
    </div>
  );
};

export default MainLayout;
