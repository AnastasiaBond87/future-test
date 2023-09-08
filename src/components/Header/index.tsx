import { categories, sortBy } from '@/shared/constants';
import Select from '@/shared/ui/Select';
import SearchBar from '@/components/SearchBar';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setSorting, setCategory, setQuery } from '@/app/store/slices/queryParamsSlice';

export default function Header() {
  const dispatch = useAppDispatch();
  const { sorting, category } = useAppSelector((store) => store.params);

  const selectSorting = (value: string): void => {
    dispatch(setSorting(value));
  };

  const selectCategory = (value: string): void => {
    dispatch(setCategory(value));
  };

  const handleRequest = (value: string): void => {
    if (value) {
      dispatch(setQuery(value));
    }
  };

  return (
    <header className="bg-black bg-[url('assets/images/header-cover.jpg')] bg-cover">
      <div className="w-full h-full bg-black/50 py-6 flex justify-center">
        <div className="flex flex-col items-center justify-center gap-12 w-[600px] max-w-full px-5 xs:px-9">
          <SearchBar onSubmit={handleRequest} />
          <div className="flex w-full gap-3 max-w-full">
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
              value={sorting}
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
