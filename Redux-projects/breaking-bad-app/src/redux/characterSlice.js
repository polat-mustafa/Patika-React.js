import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

// fetch characters from the API

const limit = 12;

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (page) => {
    const response = await axios.get(
      `https://breakingbadapi.com/api/characters?limit=${limit}&offset=${
        page * limit
      }`
    );
    return response.data;
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    status: "idle",
    error: null,
    page: 0,
    nextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = [...state.characters, ...action.payload];
      state.status = "succeeded";
      state.page += 1;
      if (action.payload.length < limit) {
        state.nextPage = false;
      }
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default characterSlice.reducer;
