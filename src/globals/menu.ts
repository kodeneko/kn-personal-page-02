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

const optLinks: MenuOpt = {
  id: 'links',
  path: '/links',
};

const optPortfolio: MenuOpt = {
  id: 'portfolio',
  path: '/portfolio',
};

const optContact: MenuOpt = {
  id: 'contact',
  path: '/contact',
};

const mainMenuList: MenuOpt[] = [
  optWelcome,
  optServices,
  optAbout,
  optSkills,
  optLinks,
  // optPortfolio,
  optContact,
];

export {
  mainMenuList,
  optAbout,
  optContact,
  optLinks,
  optPortfolio,
  optServices,
  optSkills,
  optWelcome,
};
