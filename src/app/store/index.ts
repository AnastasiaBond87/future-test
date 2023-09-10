import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import queryParamsSlice from '@/app/store/slices/queryParamsSlice';
import booksSlice from '@/app/store/slices/booksSlice';
import currentBookSlice from '@/app/store/slices/currentBookSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';

const reducer = combineReducers({
  [queryParamsSlice.name]: queryParamsSlice.reducer,
  [booksSlice.name]: booksSlice.reducer,
  [currentBookSlice.name]: currentBookSlice.reducer,
});

type RootStore = ReturnType<typeof reducer>;

const setupStore = (preloadedState?: PreloadedState<RootStore>) =>
  configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

const store = setupStore();
setupListeners(store.dispatch);

type AppState = ReturnType<typeof setupStore>;
type AppDispatch = typeof store.dispatch;
export default store;
export { type AppDispatch, type RootStore, setupStore, type AppState };
