import { composeStories } from '@storybook/react';
import * as selectStories from '@/stories/components/form/select.stories';
import { render, screen, within } from '@testing-library/react';

const { Default, Error } = composeStories(selectStories);

describe('Select', () => {
  it('renders select', () => {
    render(<Default />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveDisplayValue('オレンジ');
    within(select).getByRole('option', { name: 'オレンジ' });
    within(select).getByRole('option', { name: 'りんご' });
    expect(select).not.toBeInvalid();
  });

  it('invalid select', () => {
    render(<Error />);

    const input = screen.getByRole('combobox');
    expect(input).toBeInvalid();
  });
});
