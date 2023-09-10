import { screen } from '@testing-library/react';
import Header from '@/components/Header';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '@/_test_/utils/renderWithProviders';

describe('test header component', () => {
  test('test component render', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/', '/books/:id']}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
