import {configureStore} from '@reduxjs/toolkit'; // core redux se aaya hai
import todoReducer from "../features/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
}); // store is a global object
