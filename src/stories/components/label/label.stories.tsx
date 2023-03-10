import Label from '@/components/label/label';
import Input from '@/components/form/input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'card' },
  },
  args: {
    children: 'ラベル',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithFormControl: Story = {
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Input id="name" placeholder="VeronIKA" />
      </div>
    ),
  ],
  args: {
    children: '名前',
    htmlFor: 'name',
  },
};
