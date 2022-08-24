import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await axios.get(`https://breakingbadapi.com/api/quotes`);
  return response.data;
});

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchQuote.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchQuote.fulfilled]: (state, action) => {
      state.quotes = action.payload;
      state.status = "succeeded";
    },
    [fetchQuote.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default quoteSlice.reducer;
