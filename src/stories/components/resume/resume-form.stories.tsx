import Card from '@/components/card/card';
import ResumeForm from '@/components/resume/resume-form';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof ResumeForm> = {
  title: 'Components/Resume/ResumeForm',
  component: ResumeForm,
  tags: ['autodocs'],

  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    defaultValue: {
      id: '1',
      avatar: null,
      name: 'VeronIKA',
      maxPayGradePerStage: {
        goneFissionHydroplant: {
          title: 'eggsecutiveVP',
          point: 999,
        },
        maroonersBay: {
          title: 'eggsecutiveVP',
          point: 400,
        },
        sockeyeStation: {
          title: 'profreshionalPartTimer',
          point: 80,
        },
      },
      biography: 'よろしくおねがいします',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ResumeForm>;

export const Saved: Story = {
  args: {
    defaultValue: null,
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByRole('textbox', { name: '名前' }),
      'VeronIKA'
    );

    await userEvent.selectOptions(
      canvas.getByRole('combobox', { name: 'アラマキ砦の最高評価' }),
      'でんせつ'
    );
    await userEvent.type(
      canvas.getByRole('spinbutton', { name: 'アラマキ砦の最高評価ポイント' }),
      '{selectall}400'
    );

    await userEvent.selectOptions(
      canvas.getByRole('combobox', { name: 'ムニエール海洋発電所の最高評価' }),
      'でんせつ'
    );
    await userEvent.type(
      canvas.getByRole('spinbutton', {
        name: 'ムニエール海洋発電所の最高評価ポイント',
      }),
      '{selectall}999'
    );

    await userEvent.selectOptions(
      canvas.getByRole('combobox', { name: 'シェケナダムの最高評価' }),
      'たつじん'
    );
    await userEvent.type(
      canvas.getByRole('spinbutton', {
        name: 'シェケナダムの最高評価ポイント',
      }),
      '{selectall}80'
    );

    await userEvent.selectOptions(
      canvas.getByRole('combobox', { name: '難破船ドン・ブラコの最高評価' }),
      'たつじん'
    );
    await userEvent.type(
      canvas.getByRole('spinbutton', {
        name: '難破船ドン・ブラコの最高評価ポイント',
      }),
      '{selectall}60'
    );

    await userEvent.type(
      canvas.getByRole('textbox', { name: '自己紹介' }),
      'よろしくおねがいします'
    );

    await sleep(10);

    await userEvent.click(canvas.getByRole('button', { name: '保存する' }));

    await sleep(10);
  },
};

export const UseDefaultValues: Story = {};

export const Invalid: Story = {
  args: {
    defaultValue: null,
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByRole('spinbutton', { name: 'アラマキ砦の最高評価ポイント' }),
      '{selectall}0.1'
    );

    await userEvent.selectOptions(
      canvas.getByRole('combobox', { name: 'ムニエール海洋発電所の最高評価' }),
      'でんせつ'
    );
    await userEvent.type(
      canvas.getByRole('spinbutton', {
        name: 'ムニエール海洋発電所の最高評価ポイント',
      }),
      '{selectall}1000'
    );

    await userEvent.selectOptions(
      canvas.getByRole('combobox', { name: 'シェケナダムの最高評価' }),
      'たつじん'
    );
    await userEvent.type(
      canvas.getByRole('spinbutton', {
        name: 'シェケナダムの最高評価ポイント',
      }),
      '{selectall}200'
    );

    await userEvent.selectOptions(
      canvas.getByRole('combobox', { name: '難破船ドン・ブラコの最高評価' }),
      'たつじん'
    );
    await userEvent.type(
      canvas.getByRole('spinbutton', {
        name: '難破船ドン・ブラコの最高評価ポイント',
      }),
      '{selectall}-40'
    );

    await userEvent.type(
      canvas.getByRole('textbox', { name: '自己紹介' }),
      '1234567890'.repeat(11)
    );

    await sleep(10);

    await userEvent.click(canvas.getByRole('button', { name: '保存する' }));

    await canvas.findByText('名前を入力してください');
  },
};

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
