import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
  query: string;
  category: string;
  sorting: string;
}

const initialState: IState = {
  query: '',
  category: 'all',
  sorting: 'relevance',
};

const queryParamsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
  },
});

export const { setCategory, setSorting, setQuery } = queryParamsSlice.actions;
export default queryParamsSlice;
