import { IBook } from '@/shared/types/api.types';
import BookItem from '@/components/BookCard';

interface IProps {
  books: IBook[];
}
export default function BookList({ books }: IProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-fr">
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </ul>
  );
}
