import type { Meta, StoryObj } from '@storybook/react-vite';

import ButtonSq from '../../components/button-sq';

const meta = {
  title: 'Personal Page/ButtonSq',
  component: ButtonSq,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonSq>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    onClick: () => console.log('Click Btn'),
    icon: 'fa-solid fa-caret-right',
  },
};
