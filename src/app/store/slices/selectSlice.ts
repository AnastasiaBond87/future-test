import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
  category: string;
  sorting: string;
}

const initialState: IState = {
  category: 'all',
  sorting: 'relevance',
};

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
  },
});

export const { setCategory, setSorting } = selectSlice.actions;
export default selectSlice;
