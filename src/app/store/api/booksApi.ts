import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBooksResponse, IQueryParams } from '../../../shared/types/api.types';

const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query<IBooksResponse, IQueryParams>({
      query: ({ q, orderBy }) => ({
        url: 'volumes/',
        params: {
          q,
          orderBy,
          key: import.meta.env.VITE_API_KEY,
        },
      }),
    }),
  }),
});

export const { useLazyGetBooksQuery } = booksApi;
export default booksApi;
