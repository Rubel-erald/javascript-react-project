import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice";
const mainStore = configureStore({
  reducer: {
    rubel: counterSliceReducer,
  },
});

export default mainStore;
