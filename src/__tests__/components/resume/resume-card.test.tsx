import { composeStory } from '@storybook/react';
import * as resumeCardStories from '@/stories/components/resume/resume-card.stories';
import { render, screen } from '@testing-library/react';

// TODO composeStories で型エラーが発生するため composeStory を使用している
const Default = composeStory(
  resumeCardStories.Default,
  resumeCardStories.default
);

describe('ResumeCard', () => {
  it('renders card', () => {
    render(<Default />);

    expect(screen.getByLabelText('最終更新日')).toHaveTextContent(
      '2023年3月7日現在'
    );

    expect(screen.getByLabelText('名前')).toHaveTextContent('VeronIKA');

    expect(screen.getByLabelText('最高評価')).toHaveTextContent('でんせつ 999');

    expect(screen.getByLabelText('アラマキ砦')).toHaveTextContent(
      'たつじん 80'
    );
    expect(screen.getByLabelText('ムニエール海洋発電所')).toHaveTextContent(
      'でんせつ 999'
    );
    expect(screen.getByLabelText('シェケナダム')).toHaveTextContent('-');
    expect(screen.getByLabelText('難破船ドン・ブラコ')).toHaveTextContent(
      'でんせつ 400'
    );

    expect(screen.getByLabelText('自己紹介')).toHaveTextContent(
      'よろしくおねがいします'
    );
  });
});
