import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchBookById } from '@/app/store/thunks/booksThunk';
import BookDetails from '@/components/BookDetails';
import NoData from '@/components/NoData';
import SpinnerIcon from '../../shared/ui/Icons/SpinnerIcon';

export default function BookView() {
  const dispatch = useAppDispatch();
  const { book, isLoading, error } = useAppSelector((store) => store.book);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchBookById(id)).then((res) => res);
    }
  }, [id, dispatch]);

  return (
    <main className="flex-1 flex w-full items-center justify-center">
      {book && <BookDetails book={book} />}
      {error !== null && <NoData message="Book not found" />}
      {isLoading && <SpinnerIcon className="w-24 h-24 fill-teal-400" />}
    </main>
  );
}
