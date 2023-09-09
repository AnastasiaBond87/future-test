import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBook } from '@/shared/types/api.types';
import { fetchBookById } from '@/app/store/thunks/booksThunk';

interface IState {
  isLoading: boolean;
  book: IBook | null;
  error: unknown | null;
}

const initialState: IState = {
  isLoading: false,
  book: null,
  error: null,
};

const currentBookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBookById.pending, (state) => {
      state.book = null;
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchBookById.fulfilled, (state, action: PayloadAction<IBook>) => {
      state.book = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchBookById.rejected, (state, action: PayloadAction<unknown>) => {
      state.error = action.payload;
      state.isLoading = false;
      state.book = null;
    });
  },
});

export default currentBookSlice;
