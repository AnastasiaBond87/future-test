import { render, screen } from '@testing-library/react';
import BookCardList from '@/components/BookCardList';
import { IBook } from '../shared/types/api.types';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

type TCards = Pick<IBook, 'id' | 'volumeInfo'>[];

const cards: TCards = [
  {
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
  },
  {
    id: '2',
    volumeInfo: {
      title: 'Anna Karenina',
      categories: ['Fiction', 'Social History'],
      authors: ['Leo Tolstoy'],
      imageLinks: {
        thumbnail: '',
      },
    },
  },
];

const onClick = vi.fn();

describe('test BookCardList component', () => {
  test('test render component', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <BookCardList books={cards} />
      </MemoryRouter>
    );

    const books = screen.getAllByTestId('book-card');

    expect(cards.length).toBe(2);
    expect(screen.getAllByRole('img').length).toBe(1);

    await userEvent.click(books[0]);
    onClick.mock.calls.length === 1;
  });
});
