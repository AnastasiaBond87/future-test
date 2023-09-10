import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import RootLayout from '@/app/RootLayout';
import HomeView from '@/views/HomeView';
import NotFoundView from '@/views/NotFoundView';
import BookView from '@/views/BookView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomeView />} />
      <Route path="/books/:id" element={<BookView />} />
      <Route path="/page-not-found" element={<NotFoundView />} />
      <Route path="*" element={<Navigate to="/page-not-found" />} />
    </Route>
  )
);

export default router;
