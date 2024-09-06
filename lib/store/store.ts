import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/movieSlice";
import detailReducer from "../slices/detailMovieSlice";
import searchParamsReducer from "../slices/searchParamsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    detail: detailReducer,
    search: searchParamsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
