import type { MenuOpt } from '../models/MenuOpt';

const designList: string[] = [
  'Figma', 'Gimp',
];
const frontendList: string[] = [
  'React',
  'Angular',
  'Vue',
  'Redux',
  'Zustand',
  'Pinia',
  'React Native',
  'Next',
  'HTML5',
  'CSS3',
  'ECMAScript',
  'Typescript',
];
const backendList: string[] = [
  'NodeJs',
  'Express',
  'Mongo',
  'SQL',
  'Mongoose',
  'GraphQL',
];
const toolsList: string[] = [
  'ESLint',
  'npm',
  'yarn',
  'Webpack',
  'Docker',
  'NGinx',
  'VSC',
  'Cursor',
  'Bolt',
];

const optDesign: MenuOpt & { skills: string[] } = {
  id: 'design',
  icon: 'fa-solid fa-brush',
  skills: designList,
};

const optFrontend: MenuOpt & { skills: string[] } = {
  id: 'frontend',
  icon: 'fa-solid fa-image',
  skills: frontendList,
};

const optBackend: MenuOpt & { skills: string[] } = {
  id: 'backend',
  icon: 'fa-solid fa-display',
  skills: backendList,
};

const optTools: MenuOpt & { skills: string[] } = {
  id: 'tools',
  icon: 'fa-solid fa-screwdriver-wrench',
  skills: toolsList,
};

const skillsMenuList: (MenuOpt & { skills: string[] })[] = [
  optFrontend,
  optBackend,
  optDesign,
  optTools,
];

export {
  backendList,
  designList,
  frontendList,
  optBackend,
  optDesign,
  optFrontend,
  optTools,
  skillsMenuList,
  toolsList,
};
