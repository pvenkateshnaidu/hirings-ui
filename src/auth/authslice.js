import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authservice';

export const loginUser = createAsyncThunk(
  'auth/signin',
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await authService.login(username, password);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: !!localStorage.getItem('user'),
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      authService.logout();
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.status = 'succeeded';
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
