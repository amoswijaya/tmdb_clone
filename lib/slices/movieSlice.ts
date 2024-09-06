import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Movie {
  release_date: string;
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  details: Movie;
  searchResults: Movie[];
  trendingMovies: Movie[];
  popularMovies: Movie[];
  freeToWatch: Movie[];
  loadingTrending: boolean;
  loadingPopular: boolean;
  loadingFreeToWatch: boolean;
}

const initialState: MoviesState = {
  movies: [],
  details: {
    id: 0,
    title: "",
    overview: "",
    poster_path: "",
    release_date: "",
    vote_average: 0,
  },
  searchResults: [],
  trendingMovies: [],
  popularMovies: [],
  freeToWatch: [],
  loading: false,
  loadingTrending: false,
  loadingPopular: false,
  loadingFreeToWatch: false,
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      },
    },
  );
  return response.data.results;
});

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      },
    );
    return response.data;
  },
);

export const fetchSearchMovies = createAsyncThunk(
  "movies/fetchSearchMovies",
  async (query: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          query,
        },
      },
    );
    return response.data.results;
  },
);

export const fetchTrendingMoviesDay = createAsyncThunk(
  "movies/fetchTrendingMoviesDay",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      },
    );
    return response.data.results;
  },
);

export const fetchTrendingMoviesWeek = createAsyncThunk(
  "movies/fetchTrendingMoviesWeek",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      },
    );
    return response.data.results;
  },
);

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      },
    );
    return response.data.results;
  },
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      },
    );
    return response.data.results;
  },
);

export const fetchUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcomingMovies",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      },
    );
    return response.data.results;
  },
);

export const fetchNowPlayingMovies = createAsyncThunk(
  "movies/fetchNowPlayingMovies",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      },
    );
    return response.data.results;
  },
);

export const fetchDiscoverMovies = createAsyncThunk(
  "movies/fetchDiscoverMovies",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      },
    );
    return response.data.results;
  },
);

export const fetchDiscoverTv = createAsyncThunk(
  "movies/fetchDiscoverTv",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      },
    );
    return response.data.results;
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      })
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
        state.error = action.error.message || "Failed to fetch movie details";
      })
      .addCase(fetchSearchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch search movies";
      })
      .addCase(fetchTrendingMoviesDay.pending, (state) => {
        state.loadingTrending = true;
        state.error = null;
      })
      .addCase(fetchTrendingMoviesDay.fulfilled, (state, action) => {
        state.loadingTrending = false;
        state.trendingMovies = action.payload;
      })
      .addCase(fetchTrendingMoviesDay.rejected, (state, action) => {
        state.loadingTrending = false;
        state.error = action.error.message || "Failed to fetch trending movies";
      })
      .addCase(fetchTrendingMoviesWeek.pending, (state) => {
        state.loadingTrending = true;
        state.error = null;
      })
      .addCase(fetchTrendingMoviesWeek.fulfilled, (state, action) => {
        state.loadingTrending = false;
        state.trendingMovies = action.payload;
      })
      .addCase(fetchTrendingMoviesWeek.rejected, (state, action) => {
        state.loadingTrending = false;
        state.error = action.error.message || "Failed to fetch trending movies";
      })
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loadingPopular = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loadingPopular = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loadingPopular = false;
        state.error = action.error.message || "Failed to fetch popular movies";
      })
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.loadingPopular = true;
        state.error = null;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loadingPopular = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loadingPopular = false;
        state.error =
          action.error.message || "Failed to fetch top rated movies";
      })
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.loadingPopular = true;
        state.error = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.loadingPopular = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loadingPopular = false;
        state.error = action.error.message || "Failed to fetch upcoming movies";
      })
      .addCase(fetchNowPlayingMovies.pending, (state) => {
        state.loadingPopular = true;
        state.error = null;
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.loadingPopular = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        state.loadingPopular = false;
        state.error =
          action.error.message || "Failed to fetch now playing movies";
      })
      .addCase(fetchDiscoverMovies.pending, (state) => {
        state.loadingFreeToWatch = true;
        state.error = null;
      })
      .addCase(fetchDiscoverMovies.fulfilled, (state, action) => {
        state.loadingFreeToWatch = false;
        state.freeToWatch = action.payload;
      })
      .addCase(fetchDiscoverMovies.rejected, (state, action) => {
        state.loadingFreeToWatch = false;
        state.error = action.error.message || "Failed to fetch discover movies";
      })
      .addCase(fetchDiscoverTv.pending, (state) => {
        state.loadingFreeToWatch = true;
        state.error = null;
      })
      .addCase(fetchDiscoverTv.fulfilled, (state, action) => {
        state.loadingFreeToWatch = false;
        state.freeToWatch = action.payload;
      })
      .addCase(fetchDiscoverTv.rejected, (state, action) => {
        state.loadingFreeToWatch = false;
        state.error =
          action.error.message || "Failed to fetch free to watch movies";
      });
  },
});

export default moviesSlice.reducer;
