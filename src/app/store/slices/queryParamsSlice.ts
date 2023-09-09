import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
  query: string;
  category: string;
  orderBy: string;
  startIndex: number;
}

const initialState: IState = {
  query: '',
  category: 'all',
  orderBy: 'relevance',
  startIndex: 0,
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
      state.orderBy = action.payload;
    },
    setStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
  },
});

export const { setCategory, setSorting, setQuery, setStartIndex } = queryParamsSlice.actions;
export default queryParamsSlice;
