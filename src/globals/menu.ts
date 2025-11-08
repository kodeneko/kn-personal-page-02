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

const optDesign: MenuOpt = {
  id: 'portfolio',
  icon: 'fa-solid fa-brush',
};

const optFrontend: MenuOpt = {
  id: 'frontend',
  icon: 'fa-solid fa-image',
};

const optBackend: MenuOpt = {
  id: 'backend',
  icon: 'fa-solid fa-display',
};

const optTools: MenuOpt = {
  id: 'tools',
  icon: 'fa-solid fa-screwdriver-wrench',
};

const skillsMenuList: MenuOpt[] = [
  optDesign,
  optFrontend,
  optBackend,
  optTools,
];

export {
  mainMenuList,
  optAbout,
  optBackend,
  optContact,
  optDesign,
  optFrontend,
  optPortfolio,
  optServices,
  optSkills,
  optTools,
  optWelcome,
  skillsMenuList,
};
