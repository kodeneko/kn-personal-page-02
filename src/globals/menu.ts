import type { MenuOpt } from '../models/MenuOpt';

const optWelcome: MenuOpt = {
  id: 'welcome',
  path: '/welcome',
};

const optServices: MenuOpt = {
  id: 'services',
  path: '/services',
};

const optAbout: MenuOpt = {
  id: 'about',
  path: '/about',
};

const optSkills: MenuOpt = {
  id: 'skills',
  path: '/skills',
};

const optPortfolio: MenuOpt = {
  id: 'portfolio',
  path: '/portfolio',
};

const optContact: MenuOpt = {
  id: 'conatct',
  path: '/contact',
};

const mainMenuList: MenuOpt[] = [
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
