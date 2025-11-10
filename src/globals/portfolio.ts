import code from '../assets/code.jpg';
import computer from '../assets/computer.jpg';
import officeWood from '../assets/office-wood.jpg';
import teamPosits from '../assets/team-posits.jpg';
import type { Portfolio } from '../models/Portfolio';

const portfolio01: Portfolio = {
  id: 'example01',
  pic: teamPosits,
  links: [
    {
      id: 'code',
      path: '/',
      icon: 'fa-solid fa-code',
    },
    {
      id: 'design',
      path: '/',
      icon: 'fa-solid fa-image',
    },
    {
      id: 'git',
      path: '/',
      icon: 'fa-brands fa-github-alt',
    },
    {
      id: 'link',
      path: '/',
      icon: '<fa-solid fa-up-right-from-square',
    },
  ],
};

const portfolio02: Portfolio = {
  id: 'example02',
  pic: code,
  links: [
    {
      id: 'code',
      path: '/',
      icon: 'fa-solid fa-code',
    },
    {
      id: 'design',
      path: '/',
      icon: 'fa-solid fa-image',
    },
    {
      id: 'git',
      path: '/',
      icon: 'fa-brands fa-github-alt',
    },
    {
      id: 'link',
      path: '/',
      icon: '<fa-solid fa-up-right-from-square',
    },
  ],
};

const portfolio03: Portfolio = {
  id: 'example03',
  pic: computer,
  links: [
    {
      id: 'code',
      path: '/',
      icon: 'fa-solid fa-code',
    },
    {
      id: 'design',
      path: '/',
      icon: 'fa-solid fa-image',
    },
    {
      id: 'git',
      path: '/',
      icon: 'fa-brands fa-github-alt',
    },
    {
      id: 'link',
      path: '/',
      icon: '<fa-solid fa-up-right-from-square',
    },
  ],
};

const portfolio04: Portfolio = {
  id: 'example04',
  pic: officeWood,
  links: [
    {
      id: 'code',
      path: '/',
      icon: 'fa-solid fa-code',
    },
    {
      id: 'design',
      path: '/',
      icon: 'fa-solid fa-image',
    },
    {
      id: 'git',
      path: '/',
      icon: 'fa-brands fa-github-alt',
    },
    {
      id: 'link',
      path: '/',
      icon: '<fa-solid fa-up-right-from-square',
    },
  ],
};

const portfolio05: Portfolio = {
  id: 'example05',
  pic: teamPosits,
  links: [
    {
      id: 'code',
      path: '/',
      icon: 'fa-solid fa-code',
    },
    {
      id: 'design',
      path: '/',
      icon: 'fa-solid fa-image',
    },
    {
      id: 'git',
      path: '/',
      icon: 'fa-brands fa-github-alt',
    },
    {
      id: 'link',
      path: '/',
      icon: '<fa-solid fa-up-right-from-square',
    },
  ],
};

const portfolio06: Portfolio = {
  id: 'example06',
  pic: code,
  links: [
    {
      id: 'code',
      path: '/',
      icon: 'fa-solid fa-code',
    },
    {
      id: 'design',
      path: '/',
      icon: 'fa-solid fa-image',
    },
    {
      id: 'git',
      path: '/',
      icon: 'fa-brands fa-github-alt',
    },
    {
      id: 'link',
      path: '/',
      icon: '<fa-solid fa-up-right-from-square',
    },
  ],
};


const portfolioList: Portfolio[] = [
  portfolio01,
  portfolio02,
  portfolio03,
  portfolio04,
  portfolio05,
  portfolio06,
];

export {
  portfolio01,
  portfolio02,
  portfolio03,
  portfolio04,
  portfolio05,
  portfolio06,
  portfolioList,
};
