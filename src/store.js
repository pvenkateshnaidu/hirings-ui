import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authslice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other slices if necessary
  },
});

export default store;