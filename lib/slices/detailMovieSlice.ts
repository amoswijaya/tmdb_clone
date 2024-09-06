import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export interface DetailCast {
  id: number;
  original_name: string;
  profile_path: string;
  character: string;
}
interface DetailsState {
  details: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    budget: number;
    genres: string[];
    backdrop_path: string;
    tagline: string;
    runtime: number;
    vote_average: number;
    status: string;
    revenue: number;
    spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
    }[];
  };
  detailsCast: DetailCast[];
  loading: boolean;
  error: string | null;
  keywords: { id: number; name: string }[];
  media: { id: number; backdrops: any; logos: any; posters: any };
}
const initialState: DetailsState = {
  details: {
    id: 0,
    title: "",
    overview: "",
    poster_path: "",
    release_date: "",
    budget: 0,
    genres: [],
    backdrop_path: "",
    tagline: "",
    runtime: 0,
    vote_average: 0,
    status: "",
    revenue: 0,
    spoken_languages: [{ english_name: "", iso_639_1: "", name: "" }],
  },
  media: {
    id: 0,
    backdrops: [],
    logos: [],
    posters: [],
  },
  detailsCast: [],
  keywords: [],
  loading: false,
  error: null,
};

export const fetchMovieDetails = createAsyncThunk(
  "details/fetchMovieDetails",
  async (id: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
    );
    return response.data;
  },
);
export const fetchMovieCast = createAsyncThunk(
  "details/fetchMovieCast",
  async (id: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
    );
    return response.data;
  },
);

export const fetctKeywordsMovie = createAsyncThunk(
  "details/fetctKeywordsMovie",
  async (id: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
    );
    return response.data;
  },
);

export const fetchMediaMovie = createAsyncThunk(
  "details/fetchMediaMovie",
  async (id: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
    );
    return response.data;
  },
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchMovieCast.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieCast.fulfilled, (state, action) => {
        state.loading = false;
        state.detailsCast = action.payload.cast;
      })
      .addCase(fetchMovieCast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetctKeywordsMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetctKeywordsMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.keywords = action.payload.keywords;
      })
      .addCase(fetctKeywordsMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchMediaMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMediaMovie.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.media = action.payload;
      })
      .addCase(fetchMediaMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default detailsSlice.reducer;
