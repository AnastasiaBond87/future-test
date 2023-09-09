import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBook, IBooksResponse } from '@/shared/types/api.types';
import { fetchBooks } from '@/app/store/thunks/booksThunk';

interface IState {
  isLoading: boolean;
  error: unknown | null;
  books: IBook[];
  totalItems: number | null;
}

const initialState: IState = {
  isLoading: false,
  error: null,
  books: [],
  totalItems: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setBooks(state, action: PayloadAction<IBook[]>) {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.error = null;
    });

    builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<IBooksResponse>) => {
      const { items } = action.payload;
      if (items) {
        state.books.push(...items);
      }
      state.totalItems = action.payload.totalItems;
      state.isLoading = false;
    });
    builder.addCase(fetchBooks.rejected, (state, action: PayloadAction<unknown>) => {
      state.error = action.payload;
      state.isLoading = false;
      state.books = [];
    });
  },
});

export default booksSlice;
export const { setLoading, setBooks } = booksSlice.actions;
