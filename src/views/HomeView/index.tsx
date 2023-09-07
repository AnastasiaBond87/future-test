import SearchBar from '@/components/SearchBar';
import Select from '@/shared/ui/Select';
import { categories, sortBy } from '@/shared/constants';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setCategory, setSorting } from '@/app/store/slices/selectSlice';

export default function HomeView() {
  const dispatch = useAppDispatch();
  const { sorting, category } = useAppSelector((store) => store.select);

  const selectSorting = (value: string) => {
    dispatch(setSorting(value));
  };

  const selectCategory = (value: string) => {
    dispatch(setCategory(value));
  };

  return (
    <main className="flex-1">
      <section className="bg-black bg-[url('assets/images/header-cover.jpg')] bg-cover">
        <div className="w-full h-full bg-black/50 py-6">
          <div className="container flex flex-col items-center justify-center gap-12 w-[600px] max-w-full">
            <SearchBar />
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
      </section>
    </main>
  );
}
