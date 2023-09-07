import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ q }) => ({
        url: 'volumes/',
        params: {
          q,
        },
      }),
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
export default booksApi;
