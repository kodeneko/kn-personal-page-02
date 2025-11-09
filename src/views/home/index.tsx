import React from 'react';

import BioSec from './components/bio';
import ContactSec from './components/contact';
import PortfolioSec from './components/portfolio';
import ServicesSec from './components/services';
import SkillsSec from './components/skills';
import WelcomeSec from './components/welcome';

const HomeView: React.FC = () => (
  <>
    <WelcomeSec />
    <ServicesSec />
    <BioSec />
    <SkillsSec />
    <PortfolioSec />
    <ContactSec />
  </>
);

export default HomeView;
