import { combineReducers, configureStore } from '@reduxjs/toolkit';
import queryParamsSlice from '@/app/store/slices/queryParamsSlice';
import booksSlice from '@/app/store/slices/booksSlice';

const reducer = combineReducers({
  [queryParamsSlice.name]: queryParamsSlice.reducer,
  [booksSlice.name]: booksSlice.reducer,
});

const store = configureStore({
  reducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
