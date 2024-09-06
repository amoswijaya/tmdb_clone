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
const PopularList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { popularMovies, loading, error } = useAppSelector(
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
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}
      <div className='w-full   '>
        <div className='flex flex-row flex-nowrap overflow-y-auto  gap-5 pl-7 pt-5'>
          {loading && <p>Loading...</p>}

          {error && <p>Error: {error}</p>}

          {popularMovies.map((movie) => (
            <CardMovie
              key={movie.id}
              title={movie.title}
              date={movie.release_date}
              poster_path={movie.poster_path}
              id={movie.id}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularList;
