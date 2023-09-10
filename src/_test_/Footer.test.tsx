import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('test footer component', () => {
  test('test render component', () => {
    render(<Footer />);

    expect(screen.getByText(/anastasia/i)).toBeInTheDocument();
  });
});
