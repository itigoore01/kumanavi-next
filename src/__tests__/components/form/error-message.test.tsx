import { composeStories } from '@storybook/react';
import * as errorMessageStories from '@/stories/components/form/error-message.stories';
import { render, screen } from '@testing-library/react';

const { Default, WithFormControl } = composeStories(errorMessageStories);

describe('ErrorMessage', () => {
  it('renders error message', () => {
    render(<Default />);

    expect(screen.getByRole('alert')).toHaveTextContent('エラーメッセージ');
  });

  it('with form control', () => {
    render(<WithFormControl />);

    expect(screen.getByRole('textbox', { name: '名前' })).toHaveErrorMessage(
      '名前を入力してください'
    );
  });
});
