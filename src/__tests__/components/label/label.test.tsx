import { composeStories } from '@storybook/react';
import * as labelStories from '@/stories/components/label/label.stories';
import { render, screen } from '@testing-library/react';

const { Default, WithFormControl } = composeStories(labelStories);

describe('Label', () => {
  it('renders label', () => {
    render(<Default />);

    expect(screen.getByText('ラベル')).toBeInstanceOf(HTMLLabelElement);
  });

  it('with form control', () => {
    render(<WithFormControl />);

    expect(screen.getByText('名前')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByRole('textbox', { name: '名前' })).toBeInstanceOf(
      HTMLInputElement
    );
  });
});
