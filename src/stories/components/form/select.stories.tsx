import Select from '@/components/form/select';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'card' },
  },
  args: {
    children: (
      <>
        <option value="orange">オレンジ</option>
        <option value="apple">りんご</option>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    'aria-invalid': true,
  },
};
