import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <header />
      <main>
        <Outlet />
      </main>
      <footer />
    </>
  );
}
