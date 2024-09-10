"use client";
import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import { fetchDiscoverMovies, fetchDiscoverTv } from "../lib/slices/movieSlice";
import CardMovie from "./cardMovie";
import ToggleSwitch from "./switchBtn";
import CardSkeleton from "./cardSkeleton";

const FreeToWatch: React.FC = () => {
  const dispatch = useAppDispatch();
  const { freeToWatch, loadingFreeToWatch, error } = useAppSelector(
    (state) => state.movies,
  );
  const [freeToWatchs, setFreeToWatch] = useState("Movies");
  useEffect(() => {
    if (freeToWatchs === "Movies") {
      dispatch(fetchDiscoverMovies());
    } else if (freeToWatchs === "Tv") {
      dispatch(fetchDiscoverTv());
    }
  }, [dispatch, freeToWatchs]);
  return (
    <section>
      <div className='flex flex-row gap-2'>
        <h2 className=' text-2xl'>Free to Watch</h2>
        <ToggleSwitch
          list={["Movies", "Tv"]}
          value={freeToWatchs}
          setValue={setFreeToWatch}
        />
      </div>

      <div className='w-full   '>
        <div className='flex flex-row flex-nowrap overflow-y-auto  gap-5 pl-7 pt-5'>
          {loadingFreeToWatch || freeToWatch.length === 0
            ? [...Array(9)].map((_, i) => <CardSkeleton key={i} />)
            : freeToWatch.map((movie) => (
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

export default FreeToWatch;
