import { composeStories } from '@storybook/react';
import * as buttonStories from '@/stories/components/button/button.stories';
import { render, screen } from '@testing-library/react';

const { Default } = composeStories(buttonStories);

describe('Button', () => {
  it('renders button', () => {
    render(<Default />);

    screen.getByRole('button', { name: 'ボタン' });
  });
});
