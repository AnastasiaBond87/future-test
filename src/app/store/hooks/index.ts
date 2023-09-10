import { AppDispatch, RootStore } from '@/app/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export { useAppDispatch, useAppSelector };
