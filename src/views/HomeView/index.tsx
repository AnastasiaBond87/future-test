import SearchBar from '@/components/SearchBar';
import Select from '@/shared/ui/Select';
import { categories, sortBy } from '@/shared/constants';
import { useState } from 'react';

export default function HomeView() {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');
  return (
    <main className="flex-1">
      <section className="bg-black bg-[url('assets/images/header-cover.jpg')] bg-cover">
        <div className="w-full h-full bg-black/50 py-6">
          <div className="container flex flex-col items-center justify-center gap-12 w-[600px] max-w-full">
            <SearchBar />
            <div className="flex w-full gap-3">
              <Select
                options={categories}
                value={category}
                setValue={setCategory}
                id="category-select"
                label="categories"
              />
              <Select
                options={sortBy}
                value={sort}
                setValue={setSort}
                id="sort-select"
                label="sorted by"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
