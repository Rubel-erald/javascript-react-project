import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "rubel",
  initialState: {
    likes: 0,
    dislike: 0,
  },
  reducers: {
    setlike: (state) => {
      state.likes += 1;
    },
    setdislike: (state) => {
      state.dislike += 1;
    },
  },
});
export const { setdislike, setlike } = counterSlice.actions;
export default counterSlice.reducer;
