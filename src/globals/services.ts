import code from '../assets/code.jpg';
import computer from '../assets/computer.jpg';
import meeting from '../assets/meeting.jpg';
import teamPosits from '../assets/team-posits.jpg';
import type { CardProps } from '../components/card/types';

const serviceList: (Omit<CardProps, 'body'> & { id: string })[] = [
  {
    id: 'diseño',
    compact: true,
    pic: teamPosits,
  },
  {
    id: 'desarrollo',
    compact: true,
    pic: code,
  },
  {
    id: 'entrega',
    compact: true,
    pic: computer,
  },
  {
    id: 'mentoría',
    compact: true,
    pic: meeting,
  },
];

export { serviceList };
