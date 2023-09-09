import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { AppState } from '@/app/store';
import { setLoading } from '@/app/store/slices/booksSlice';

const URL = import.meta.env.VITE_URL;
const LIMIT = import.meta.env.VITE_BOOKS_LIMIT;
const KEY = import.meta.env.VITE_API_KEY;

const fetchBooks = createAsyncThunk(
  'books/fetchBooksStatus',
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { params } = getState() as AppState;
    const { orderBy, startIndex, query } = params;

    if (startIndex === 0) {
      dispatch(setLoading(true));
    }

    return axios
      .get(
        `${URL}?q=${query}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${LIMIT}&key=${KEY}`
      )
      .then((res) => res.data)
      .catch((err: AxiosError) => {
        return rejectWithValue(err.response?.data);
      });
  }
);

export { fetchBooks };
