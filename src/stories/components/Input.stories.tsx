import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from '../../components/input';

const meta = {
  title: 'Personal Page/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Name...',
  },
};
