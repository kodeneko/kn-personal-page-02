import code from '../assets/code.jpg';
import computer from '../assets/computer.jpg';
import meeting from '../assets/meeting.jpg';
import teamPosits from '../assets/team-posits.jpg';
import type { CardProps } from '../components/card/types';

const serviceList: (Omit<CardProps, 'body'> & { id: string })[] = [
  {
    id: 'design',
    compact: true,
    pic: teamPosits,
  },
  {
    id: 'development',
    compact: true,
    pic: code,
  },
  {
    id: 'deliveri',
    compact: true,
    pic: computer,
  },
  {
    id: 'mentoring',
    compact: true,
    pic: meeting,
  },
];

export { serviceList };
