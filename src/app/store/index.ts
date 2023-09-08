import { combineReducers, configureStore } from '@reduxjs/toolkit';
import queryParamsSlice from '@/app/store/slices/queryParamsSlice';
import booksApi from '@/app/store/api/booksApi';

const reducer = combineReducers({
  [queryParamsSlice.name]: queryParamsSlice.reducer,
  [booksApi.reducerPath]: booksApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([booksApi.middleware]),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
