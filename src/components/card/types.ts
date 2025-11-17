import type { MenuOpt } from '../../models/MenuOpt';

type CardProps = {
  compact?: boolean;
  pic: string;
  title?: string;
  body?: string;
  actions?: MenuOpt[]
};

export type { CardProps };
