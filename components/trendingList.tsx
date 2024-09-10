"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import {
  fetchTrendingMoviesDay,
  fetchTrendingMoviesWeek,
} from "../lib/slices/movieSlice";
import CardMovie from "./cardMovie";
import ToggleSwitch from "./switchBtn";
import CardSkeleton from "./cardSkeleton";

const TrendingList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { trendingMovies, loadingTrending, error } = useAppSelector(
    (state) => state.movies,
  );
  const [trending, setTrending] = useState("Day");
  useEffect(() => {
    console.log(trending);
    if (trending === "Day") {
      dispatch(fetchTrendingMoviesDay());
    } else {
      dispatch(fetchTrendingMoviesWeek());
    }
  }, [dispatch, trending]);

  return (
    <section className='pt-7 '>
      <div className='flex flex-row gap-2'>
        <h2 className=' text-2xl'>Trending</h2>
        <ToggleSwitch
          list={["Day", "This Week"]}
          value={trending}
          setValue={setTrending}
        />
      </div>

      <div className='w-full  bg-wave-bg  bg-cover bg-top'>
        <div className='flex flex-row flex-nowrap overflow-y-auto  gap-5 pl-7 pt-5'>
          {trendingMovies.length === 0 || loadingTrending
            ? [...Array(9)].map((i) => <CardSkeleton key={i} />)
            : trendingMovies.map((movie: any) => (
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

export default TrendingList;
