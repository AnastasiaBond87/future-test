import { screen, render } from '@testing-library/react';
import NotFoundView from '../views/NotFoundView';
import { MemoryRouter } from 'react-router-dom';

describe('test not found page', () => {
  test('test page render', () => {
    render(
      <MemoryRouter initialEntries={['/hshshsh']}>
        <NotFoundView />
      </MemoryRouter>
    );

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
