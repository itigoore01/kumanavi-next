import ErrorMessage from '@/components/form/error-message';
import Input from '@/components/form/input';
import Label from '@/components/label/label';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/Form/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'card' },
  },
  args: {
    children: 'エラーメッセージ',
  },
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {};

export const WithFormControl: Story = {
  decorators: [
    (Story) => (
      <div>
        <Label htmlFor="name">名前</Label>
        <Input
          id="name"
          aria-invalid
          aria-errormessage="nameError"
          placeholder="VeronIKA"
        />
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'nameError',
    children: '名前を入力してください',
  },
};
