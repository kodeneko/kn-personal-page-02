import type { MenuOpt } from '../models/MenuOpt';

const optGithub:MenuOpt = {
  id: 'Github',
  icon: 'fa-brands fa-github-alt',
  path: 'https://github.com/kodeneko',
};

const optCodepen:MenuOpt = {
  id: 'Codepen',
  icon: 'fa-brands fa-codepen',
  path: 'https://codepen.io/kodeneko',
};

const optStackblitz:MenuOpt = {
  id: 'StackBlitz',
  icon: 'a-solid fa-bolt',
  path: 'https://stackblitz.com/@kodeneko',
};

const optFigma:MenuOpt = {
  id: 'Figma',
  icon: 'fa-brands fa-figma',
  path: 'https://www.figma.com/@kodeneko',
};

const linkList = [
  optGithub,
  optCodepen,
  optStackblitz,
  optFigma,
];

export {
  linkList,
  optCodepen,
  optFigma,
  optGithub,
  optStackblitz,
};
