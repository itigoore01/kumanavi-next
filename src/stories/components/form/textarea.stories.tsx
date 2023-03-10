import Textarea from '@/components/form/textarea';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'card' },
  },
  args: {
    placeholder: 'Placeholder',
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    'aria-invalid': true,
  },
};
