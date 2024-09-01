// src/store/contactSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

type ContactState = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
};

export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (
    formData: { name: string; email: string; message: string },
    { rejectWithValue }
  ) => {
    try {
      console.log(`API URL: ${process.env.NEXT_PUBLIC_API_URL}`);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        formData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export default contactSlice.reducer;
//
