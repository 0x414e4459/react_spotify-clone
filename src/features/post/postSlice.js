import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Lets learn redux",
    content: "redux state mangement library",
  },
  { id: "2", title: "Redux -toolkit", content: "redux-toolkit for react" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default postSlice.reducer;
export const allPosts = (state) => state.posts;
export const { addPosts } = postSlice.actions;
