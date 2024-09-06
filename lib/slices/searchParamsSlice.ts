import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface SearchParamsState {
  searchResults: string[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchParamsState = {
  searchResults: [],
  loading: false,
  error: null,
};

export const fetchSearchParams = createAsyncThunk(
  "search/fetchSearchParams",
  async (searchParams: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&query=${searchParams}&page=1&include_adult=false`,
    );
    console.log(response.data);
    return response.data;
  },
);

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchParams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchParams.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.results;
      })
      .addCase(fetchSearchParams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch search params";
      });
  },
});

export default searchParamsSlice.reducer;
