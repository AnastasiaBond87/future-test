import { useEffect } from 'react';
import { toast } from 'react-toastify';
import NoData from '@/components/NoData';
import SpinnerIcon from '@/shared/ui/Icons/SpinnerIcon';
import BookList from '@/components/BookList';
import Books from '@/components/Books';
import { useAppSelector } from '../../app/store/hooks';
import { IError } from '../../shared/types/api.types';

export default function HomeView() {
  const { isLoading, error, books, totalItems } = useAppSelector((store) => store.books);

  useEffect(() => {
    if (error) {
      const err = error as IError;

      if (err.error.message) {
        toast.error(err.error.message);
      } else {
        toast.error('UNKNOWN ERROR');
      }
    }
  }, [error]);

  return (
    <main className="flex-1 flex justify-center items-center px-5 xs:px-9 py-5">
      {(error || (books.length < 1 && !isLoading)) && <NoData />}
      {isLoading && <SpinnerIcon className="w-24 h-24 fill-teal-400" />}
      {!error && books.length > 0 && !isLoading && (
        <Books totalItems={totalItems}>
          <BookList books={books} />
        </Books>
      )}
    </main>
  );
}
