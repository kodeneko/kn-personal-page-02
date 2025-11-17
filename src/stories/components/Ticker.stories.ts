import type { Meta, StoryObj } from '@storybook/react-vite';

import Ticker from '../../components/ticker';

const meta = {
  title: 'Personal Page/Ticker',
  component: Ticker,
  tags: ['autodocs'],
} satisfies Meta<typeof Ticker>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    labelList: [
      'Wireframes',
      'Mockups',
      'Apps',
      'Webs',
      'Wireframes',
      'Mockups',
      'Apps',
      'Webs',
      'Wireframes',
      'Mockups',
      'Apps',
      'Webs',
    ],
  },
};
