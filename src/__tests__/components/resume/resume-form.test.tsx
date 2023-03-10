import { composeStories } from '@storybook/react';
import * as resumeFormStories from '@/stories/components/resume/resume-form.stories';
import { render, screen } from '@testing-library/react';
import { useRouter as _useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const useRouter = _useRouter as jest.Mock;

const { Saved, UseDefaultValues, Invalid } = composeStories(resumeFormStories);

describe('ResumeForm', () => {
  it('renders form by default value', () => {
    render(<UseDefaultValues />);

    expect(
      screen.getByRole('textbox', {
        name: '名前',
      })
    ).toHaveDisplayValue('VeronIKA');

    expect(
      screen.getByRole('combobox', {
        name: 'アラマキ砦の最高評価',
      })
    ).toHaveDisplayValue('たつじん');
    expect(
      screen.getByRole('spinbutton', {
        name: 'アラマキ砦の最高評価ポイント',
      })
    ).toHaveDisplayValue('80');

    expect(
      screen.getByRole('combobox', {
        name: 'ムニエール海洋発電所の最高評価',
      })
    ).toHaveDisplayValue('でんせつ');
    expect(
      screen.getByRole('spinbutton', {
        name: 'ムニエール海洋発電所の最高評価ポイント',
      })
    ).toHaveDisplayValue('999');

    expect(
      screen.getByRole('combobox', {
        name: 'シェケナダムの最高評価',
      })
    ).toHaveDisplayValue('かけだし');
    expect(
      screen.getByRole('spinbutton', {
        name: 'シェケナダムの最高評価ポイント',
      })
    ).toHaveDisplayValue('40');

    expect(
      screen.getByRole('combobox', {
        name: '難破船ドン・ブラコの最高評価',
      })
    ).toHaveDisplayValue('でんせつ');
    expect(
      screen.getByRole('spinbutton', {
        name: '難破船ドン・ブラコの最高評価ポイント',
      })
    ).toHaveDisplayValue('400');

    expect(
      screen.getByRole('textbox', {
        name: '自己紹介',
      })
    ).toHaveDisplayValue('よろしくおねがいします');
  });

  it('save resume', async () => {
    const mockRouter = {
      push: jest.fn(),
    };
    useRouter.mockReturnValue(mockRouter);

    const { container } = render(<Saved />);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
    await Saved.play?.({ canvasElement: container } as any);

    expect(mockRouter.push).toBeCalledTimes(1);
    expect(mockRouter.push).toBeCalledWith('/resumes/2');
  });

  it('renders error message', async () => {
    const { container } = render(<Invalid />);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
    await Invalid.play?.({ canvasElement: container } as any);

    expect(screen.getByLabelText('名前')).toHaveErrorMessage(
      '名前を入力してください'
    );

    expect(
      screen.getByLabelText('アラマキ砦の最高評価ポイント')
    ).toHaveErrorMessage('評価は整数で入力してください');
    expect(
      screen.getByLabelText('ムニエール海洋発電所の最高評価ポイント')
    ).toHaveErrorMessage('評価は0〜999の間で入力してください');
    expect(
      screen.getByLabelText('シェケナダムの最高評価ポイント')
    ).toHaveErrorMessage('評価は0〜100の間で入力してください');
    expect(
      screen.getByLabelText('難破船ドン・ブラコの最高評価ポイント')
    ).toHaveErrorMessage('評価は0〜999の間で入力してください');

    expect(screen.getByLabelText('自己紹介')).toHaveErrorMessage(
      '自己紹介は100文字以内で入力してください'
    );
  });
});
