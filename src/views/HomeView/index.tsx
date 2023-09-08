import { useLazyGetBooksQuery } from '@/app/store/api/booksApi';
import { useEffect } from 'react';
import { useAppSelector } from '@/app/store/hooks';
import { IError } from '../../shared/types/api.types';
import { toast } from 'react-toastify';
import NoData from '@/components/NoData';
import SpinnerIcon from '../../shared/ui/Icons/SpinnerIcon';

export default function HomeView() {
  const { query } = useAppSelector((store) => store.params);
  const [trigger, { data, error, isFetching }] = useLazyGetBooksQuery();

  useEffect(() => {
    if (error) {
      if ('data' in error) {
        const errData = error.data as IError;
        toast.error(errData.error.message);
      } else {
        toast.error('UNKNOWN ERROR');
      }
    }
  }, [data, error]);

  useEffect(() => {
    if (query) trigger({ q: query });
  }, [query, trigger]);
  return (
    <main className="flex-1 flex justify-center items-center">
      {((!data && !isFetching) || (data && data.totalItems === 0 && !isFetching)) && <NoData />}
      {isFetching && <SpinnerIcon className="w-24 h-24 fill-teal-400" />}
    </main>
  );
}
