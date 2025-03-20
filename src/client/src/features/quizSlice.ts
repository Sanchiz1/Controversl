import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Question } from '../types/Question';

const BASE_URL = "http//localhost:5000";

export type StateType = {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

const initialState: StateType = {
  questions: [],
  loading: false,
  error: null,
};

export const fetchQuestionsByTheme = createAsyncThunk(
  'quiz/fetchQuestionsByTheme',
  async (theme: string) => {
    const response = await fetch(`${BASE_URL}/generateQuizByTheme?theme=${theme}`);
    if (!response.ok) {
      throw new Error('Failed to load questions');
    }
    const data = await response.json();
    return data as Question[];
  }
);

export const fetchQuestions = createAsyncThunk(
  'quiz/fetchQuestions',
  async () => {
    const response = await fetch(`${BASE_URL}/generateQuiz`);
    if (!response.ok) {
      throw new Error('Failed to load questions');
    }
    const data = await response.json();
    return data as Question[];
  }
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsByTheme.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestionsByTheme.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(fetchQuestionsByTheme.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load questions';
      })
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load questions';
      });
  },
});

export default quizSlice.reducer;
