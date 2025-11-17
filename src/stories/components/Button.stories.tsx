import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../../components/button';

const meta = {
  title: 'Personal Page/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    onClick: () => console.log('Click Btn'),
    children: 'Label',
  },
};
