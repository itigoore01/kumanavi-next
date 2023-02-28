import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Home');
  });
});
