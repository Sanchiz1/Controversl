import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './features/quizSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
