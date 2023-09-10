import { Link } from 'react-router-dom';

export default function NotFoundView() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <h2 className="text-7xl font-bold mb-8">{'Oops! :('}</h2>
      <p className="text-xl mb-3">Page not found</p>
      <Link to="/" className="text-lg text-teal-400 underline hover:text-teal-300 duration-150">
        Go home
      </Link>
    </main>
  );
}
