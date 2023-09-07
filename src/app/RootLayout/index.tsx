import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';

export default function RootLayout() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/page-not-found' && <Header />}
      <Outlet />
      <footer />
    </>
  );
}
