import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../../features/counter/counterSlice";
import postReducer from "../../features/post/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postReducer,
  },
});
