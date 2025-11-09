import type { MenuOpt } from '../models/MenuOpt';

const designList: string[] = [
  'Figma', 'Gimp',
];
const frontendList: string[] = [
  'React',
  'Angular',
  'Vue',
  'Typescript',
  'ECMAScript',
  'HTML5',
  'CSS3',
  'Redux',
  'Zustand',
  'Pinia',
  'Framer',
];
const backendList: string[] = [
  'NodeJs',
  'Express',
  'MongoDB',
  'SQL',
];
const toolsList: string[] = [
  'VSC',
  'Cursor',
  'Git',
  'NPM',
];

const optDesign: MenuOpt & { skills: string[] } = {
  id: 'portfolio',
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
  optDesign,
  optFrontend,
  optBackend,
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
