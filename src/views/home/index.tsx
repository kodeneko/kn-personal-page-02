import { motion as m } from 'motion/react';
import React from 'react';

import Ticker from '../../components/ticker';
import { tickerList } from '../../globals/ticker';
import BioSec from './components/bio';
import ContactSec from './components/contact';
import LinksSec from './components/links';
// import PortfolioSec from './components/portfolio';
import ServicesSec from './components/services';
import SkillsSec from './components/skills';
import WelcomeSec from './components/welcome';
import styles from './styles.module.less';

const HomeView: React.FC = () => (
  <>
    <WelcomeSec />
    <m.div
      className={styles.ticker}
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
      <Ticker labelList={tickerList} />
    </m.div>
    <ServicesSec />
    <BioSec />
    <SkillsSec />
    <m.div
      className={styles.ticker}
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
      <Ticker labelList={tickerList} />
    </m.div>
    {/* <PortfolioSec /> */}
    <LinksSec />
    <ContactSec />
  </>
);

export default HomeView;

