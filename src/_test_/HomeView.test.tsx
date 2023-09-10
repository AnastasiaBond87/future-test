import { screen } from '@testing-library/react';
import HomeView from '@/views/HomeView';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from './utils/renderWithProviders';

describe('test home view', () => {
  test('test render view', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <HomeView />
      </MemoryRouter>
    );

    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });
});
