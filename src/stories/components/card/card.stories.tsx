import Card from '@/components/card/card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: <p>Card</p>,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
