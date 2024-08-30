// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "@/app/contact-us/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
