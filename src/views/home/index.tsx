import React from 'react';

import Ticker from '../../components/ticker';
import { tickerList } from '../../globals/ticker';
import BioSec from './components/bio';
import ContactSec from './components/contact';
import PortfolioSec from './components/portfolio';
import ServicesSec from './components/services';
import SkillsSec from './components/skills';
import WelcomeSec from './components/welcome';

const HomeView: React.FC = () => (
  <>
    <WelcomeSec />
    <Ticker labelList={tickerList} />
    <ServicesSec />
    <BioSec />
    <SkillsSec />
    <PortfolioSec />
    <ContactSec />
  </>
);

export default HomeView;

