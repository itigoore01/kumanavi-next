import { composeStories } from '@storybook/react';
import * as cardStories from '@/stories/components/card/card.stories';
import { render, screen } from '@testing-library/react';

const { Default } = composeStories(cardStories);

describe('Card', () => {
  it('renders card', () => {
    render(<Default />);

    screen.getByText('Card');
  });
});
