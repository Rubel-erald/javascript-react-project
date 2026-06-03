import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "rubel",
  initialState: {
    likes: 0,
    dislike: 0,
    notes : []
  },
  reducers: {
    setlike: (state) => {
      state.likes += 1;
    },
    setdislike: (state) => {
      state.dislike += 1;
    },
    setNotes : (state , action) => {
      state.notes = action.payload
    }
  },
});
export const { setdislike, setlike , setNotes} = counterSlice.actions;
export default counterSlice.reducer;
