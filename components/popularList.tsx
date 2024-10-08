"use client";
import React, { useState, useEffect } from "react";
import ToggleSwitch from "./switchBtn";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import {
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchTopRatedMovies,
} from "@/lib/slices/movieSlice";
import CardMovie from "./cardMovie";
import CardSkeleton from "./cardSkeleton";
const PopularList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { popularMovies, loadingPopular, error } = useAppSelector(
    (state) => state.movies,
  );
  const [popular, setPopular] = useState("Now Playing");
  useEffect(() => {
    if (popular === "Now Playing") {
      dispatch(fetchNowPlayingMovies());
    } else if (popular === "Popular") {
      dispatch(fetchPopularMovies());
    } else if (popular === "Top Rated") {
      dispatch(fetchTopRatedMovies());
    } else if (popular === "Upcoming") {
      dispatch(fetchUpcomingMovies());
    }
  }, [dispatch, popular]);
  return (
    <section className='pt-7 '>
      <div className='flex flex-row gap-2'>
        <h2 className=' text-2xl'>Popular</h2>
        <ToggleSwitch
          list={["Now Playing", "Popular", "Top Rated", "Upcoming"]}
          value={popular}
          setValue={setPopular}
        />
      </div>

      <div className='w-full   '>
        <div className='flex flex-row flex-nowrap overflow-y-auto  gap-5 pl-7 pt-5'>
          {popularMovies.length === 0 || loadingPopular
            ? [...Array(9)].map((_, i) => <CardSkeleton key={i} />)
            : popularMovies.map((movie) => (
                <CardMovie
                  key={movie.id}
                  title={movie.title}
                  date={movie.release_date}
                  poster_path={movie.poster_path}
                  id={movie.id}
                  vote_average={movie.vote_average}
                />
              ))}
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    </section>
  );
};

export default PopularList;
