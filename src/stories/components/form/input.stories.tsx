import Input from '@/components/form/input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'card' },
  },
  args: {
    placeholder: 'Placeholder',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    'aria-invalid': true,
  },
};
