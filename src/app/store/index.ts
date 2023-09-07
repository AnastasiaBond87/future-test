import { combineReducers, configureStore } from '@reduxjs/toolkit';
import selectSlice from '@/app/store/slices/selectSlice';

const reducer = combineReducers({
  [selectSlice.name]: selectSlice.reducer,
});

const store = configureStore({
  reducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
