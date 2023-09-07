import { combineReducers, configureStore } from '@reduxjs/toolkit';
import selectSlice from '@/app/store/slices/selectSlice';
import booksApi from '@/app/store/api/booksApi';

const reducer = combineReducers({
  [selectSlice.name]: selectSlice.reducer,
  [booksApi.reducerPath]: booksApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([booksApi.middleware]),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
