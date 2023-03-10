import Button from '@/components/button/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'card' },
  },
  args: {
    children: 'ボタン',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
