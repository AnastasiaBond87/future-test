import { ReactNode } from 'react';
import TextButton from '@/shared/ui/TextButton';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setStartIndex } from '@/app/store/slices/queryParamsSlice';
import { fetchBooks } from '@/app/store/thunks/booksThunk';

interface IProps {
  totalItems: number | null;
  children: ReactNode;
}

export default function Books({ totalItems, children }: IProps) {
  const dispatch = useAppDispatch();
  const { startIndex } = useAppSelector((store) => store.params);

  const handleClick = (): void => {
    dispatch(setStartIndex(startIndex + +import.meta.env.VITE_BOOKS_LIMIT));
    dispatch(fetchBooks());
  };

  if (!totalItems) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="self-center font-bold text-lg">Found {totalItems} results</h3>
      {children}
      <TextButton size="lg" onClick={handleClick}>
        Load more
      </TextButton>
    </div>
  );
}
