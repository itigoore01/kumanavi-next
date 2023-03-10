import { composeStories } from '@storybook/react';
import * as inputStories from '@/stories/components/form/input.stories';
import { render, screen } from '@testing-library/react';

const { Default, Error } = composeStories(inputStories);

describe('Input', () => {
  it('renders input', () => {
    render(<Default />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveDisplayValue('');
    expect(input).toHaveAttribute('placeholder', 'Placeholder');
    expect(input).not.toBeInvalid();
  });

  it('invalid input', () => {
    render(<Error />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInvalid();
  });
});
