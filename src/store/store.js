import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../slices/userslice";

const store = configureStore({
  reducer: {
    user: userreducer,
  },
});

export default store;
