import type { Meta, StoryObj } from '@storybook/react-vite';

import pic from '../../assets/team-posits.jpg';
import Card from '../../components/card';

const meta = {
  title: 'Personal Page/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    compact: false,
    pic,
    title: 'Lorem Ipsum',
    body: 'Lorem ipsum lorem amet dolor etsme res',
    actions: [
      {
        id: 'code',
        icon: 'fa-solid fa-code',
      },
      {
        id: 'pic',
        icon: 'fa-solid fa-image',
      },
      {
        id: 'github',
        icon: 'fa-brands fa-github-alt',
      },
      {
        id: 'link',
        icon: 'fa-solid fa-up-right-from-square',
      },
    ],
  },
};

export const Compact: Story = {
  args: {
    compact: true,
    pic,
    body: 'Lorem ipsum lorem amet dolor etsme res',
  },
};
