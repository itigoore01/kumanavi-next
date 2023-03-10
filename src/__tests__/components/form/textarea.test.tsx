import { composeStories } from '@storybook/react';
import * as textareaStories from '@/stories/components/form/textarea.stories';
import { render, screen } from '@testing-library/react';

const { Default, Error } = composeStories(textareaStories);

describe('Textarea', () => {
  it('renders textarea', () => {
    render(<Default />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveDisplayValue('');
    expect(textarea).toHaveAttribute('placeholder', 'Placeholder');
    expect(textarea).not.toBeInvalid();
  });

  it('invalid textarea', () => {
    render(<Error />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInvalid();
  });
});
