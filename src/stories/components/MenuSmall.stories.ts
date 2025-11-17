import type { Meta, StoryObj } from '@storybook/react-vite';

import MenuSmall from '../../components/menu-small';
import { skillsMenuList } from '../../globals/skills';


const meta = {
  title: 'Personal Page/MenuSmall',
  component: MenuSmall,
  tags: ['autodocs'],
} satisfies Meta<typeof MenuSmall>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    menu: skillsMenuList,
    optSel: 'frontend',
    selectOpt: (id: string) => {console.log(`Seleccionado ${id}`);},
  },
};
