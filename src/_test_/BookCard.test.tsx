import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IBook } from '@/shared/types/api.types';
import BookCard from '@/components/BookCard';
import { MemoryRouter } from 'react-router-dom';

type TCard = Pick<IBook, 'id' | 'volumeInfo'>;

const cardWithFullData: TCard = {
  id: '1',
  volumeInfo: {
    title: 'The Idiot',
    categories: ['Fiction', 'Social History'],
    authors: ['Fyodor Dostoyevsky'],
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=E68HAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    },
  },
};

const cardWithPartialData: TCard = {
  id: '1',
  volumeInfo: {
    title: 'Anna Karenina',
    authors: ['Leo Tolstoy'],
  },
};

const onClick = vi.fn();

describe('test book card', () => {
  test('test render with full data', () => {
    render(
      <MemoryRouter>
        <BookCard book={cardWithFullData} />
      </MemoryRouter>
    );

    expect(screen.getByText(/idiot/i)).toBeInTheDocument();
    expect(screen.getByText(/fiction/i)).toBeInTheDocument();
    expect(screen.queryByText(/social history/i)).not.toBeInTheDocument();
    expect(screen.getByText(/dostoyevsky/i)).toBeInTheDocument();
    expect(screen.getByTestId('card-image')).toBeInTheDocument();
  });

  test('test render with partial data', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <BookCard book={cardWithPartialData} />
      </MemoryRouter>
    );

    expect(screen.queryByTestId('card-image')).not.toBeInTheDocument();
  });

  test('test click on card', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <BookCard book={cardWithFullData} />
      </MemoryRouter>
    );
    await userEvent.click(container);

    onClick.mock.calls.length === 1;
  });
});
