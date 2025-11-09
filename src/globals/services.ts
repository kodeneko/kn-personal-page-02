import code from '../assets/code.jpg';
import computer from '../assets/computer.jpg';
import meeting from '../assets/meeting.jpg';
import teamPosits from '../assets/team-posits.jpg';
import type { CardProps } from '../components/card/types';

const serviceList: (CardProps & { id : string })[] = [
  {
    id: 'diseño',
    compact: true,
    pic: teamPosits,
    body: 'Diseños aplicando conocimiento UX/UI',
  },
  {
    id: 'desarrollo',
    compact: true,
    pic: code,
    body: 'Desarrollo fullstack, aunamos el front-end y el back-end',
  },
  {
    id: 'entrega',
    compact: true,
    pic: computer,
    body: 'Entregamos la app testeada y funcionando',
  },
  {
    id: 'mentoría',
    compact: true,
    pic: meeting,
    body: 'Diseños aplicando conocimiento UX/UI',
  },
];

export { serviceList };
