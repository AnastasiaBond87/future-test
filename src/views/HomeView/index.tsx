import { useEffect } from 'react';
import NoData from '@/components/NoData';
import SpinnerIcon from '@/shared/ui/Icons/SpinnerIcon';
import BookList from '@/components/BookCardList';
import Books from '@/components/Books';
import { useAppSelector } from '@/app/store/hooks';
import { handleError } from '@/shared/utils/handleError';

export default function HomeView() {
  const { isLoading, error, books, totalItems } = useAppSelector((store) => store.books);

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error]);

  return (
    <main className="flex-1 flex justify-center items-center px-5 xs:px-9 py-9">
      {(error || (books.length < 1 && !isLoading)) && <NoData message="No data" />}
      {isLoading && <SpinnerIcon className="w-24 h-24 fill-teal-400" />}
      {!error && books.length > 0 && !isLoading && (
        <Books totalItems={totalItems}>
          <BookList books={books} />
        </Books>
      )}
    </main>
  );
}
