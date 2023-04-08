import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import customalertReducer from "../features/customalert/customalertSlice";
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customalert: customalertReducer,
    user: userSlice,
  },
});
