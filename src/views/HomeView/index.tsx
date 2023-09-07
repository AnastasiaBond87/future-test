import SearchBar from '@/components/SearchBar';

export default function HomeView() {
  return (
    <main className="flex-1">
      <section className="bg-black bg-[url('assets/images/header-cover.jpg')] bg-cover">
        <div className="w-full h-full bg-black/50 py-6">
          <div className="container flex flex-col items-center justify-center">
            <SearchBar />
          </div>
        </div>
      </section>
    </main>
  );
}
