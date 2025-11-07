import type { MainMenuOpt } from '../models/MainMenuOpt';

const optWelcome: MainMenuOpt = {
  id: 'welcome',
  path: '/welcome',
};

const optServices: MainMenuOpt = {
  id: 'services',
  path: '/services',
};

const optAbout: MainMenuOpt = {
  id: 'about',
  path: '/about',
};

const optSkills: MainMenuOpt = {
  id: 'skills',
  path: '/skills',
};

const optPortfolio: MainMenuOpt = {
  id: 'portfolio',
  path: '/portfolio',
};

const optContact: MainMenuOpt = {
  id: 'conatct',
  path: '/contact',
};

const mainMenuList: MainMenuOpt[] = [
  optWelcome,
  optServices,
  optAbout,
  optSkills,
  optPortfolio,
  optContact,
];

export {
  mainMenuList,
  optAbout,
  optContact,
  optPortfolio,
  optServices,
  optSkills,
  optWelcome,
};
