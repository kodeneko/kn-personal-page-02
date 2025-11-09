import React from 'react';
import { Outlet } from 'react-router-dom';

import MenuMain from '../../components/menu-main';
import { mainMenuList } from '../../globals/menu';
import { ColorThemeList } from '../../models/ColorTheme';
import { LangList } from '../../models/Langs';
import styles from './styles.module.less';

const MainLayout: React.FC = () => (
  <div className={styles.mainLayout}>
    <div className={styles.frame}>
      <header>
        <MenuMain
          optList={mainMenuList}
          langList={LangList}
          colorList={ColorThemeList}
          optSel='welcome'
          langSel='en'
          colorSel='purple'
          changeOpt={() => console.log('Click change opt')}
          changeLang={() => console.log('Click change lang')}
          changeColor={() => console.log('Click change color')}
        />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>Footer</footer>
    </div>
  </div>
);

export default MainLayout;
