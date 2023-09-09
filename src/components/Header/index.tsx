import { categories, sortBy } from '@/shared/constants';
import Select from '@/shared/ui/Select';
import SearchBar from '@/components/SearchBar';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  setSorting,
  setCategory,
  setQuery,
  setStartIndex,
} from '@/app/store/slices/queryParamsSlice';
import { fetchBooks } from '@/app/store/thunks/booksThunk';

export default function Header() {
  const dispatch = useAppDispatch();
  const { orderBy, category, query } = useAppSelector((store) => store.params);

  const selectSorting = (value: string): void => {
    dispatch(setSorting(value));
  };

  const selectCategory = (value: string): void => {
    dispatch(setCategory(value));
  };

  const handleRequest = (): void => {
    dispatch(setStartIndex(0));
    dispatch(fetchBooks());
  };

  const setSearchValue = (value: string): void => {
    dispatch(setQuery(value));
  };

  return (
    <header className="bg-black bg-[url('assets/images/header-cover.jpg')] bg-cover">
      <div className="w-full h-full bg-black/50 py-6 flex justify-center">
        <div className="flex flex-col items-center justify-center gap-12 w-[600px] max-w-full px-5 xs:px-9">
          <h2 className="text-white uppercase font-bold text-3xl">Search for books</h2>
          <SearchBar onSubmit={handleRequest} value={query} setValue={setSearchValue} />
          <div className="flex justify-center w-full gap-3 max-w-full">
            <Select
              options={categories}
              value={category}
              setValue={selectCategory}
              id="category-select"
              label="categories"
              className="w-36 xs:w-52"
            />
            <Select
              options={sortBy}
              value={orderBy}
              setValue={selectSorting}
              id="sort-select"
              label="sorted by"
              className="w-36 xs:w-52"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
