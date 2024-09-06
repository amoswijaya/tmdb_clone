import { DetailCast } from "@/lib/slices/detailMovieSlice";
import React from "react";

const CardCast = ({ original_name, profile_path, character }: DetailCast) => {
  return (
    <div className='flex flex-col rounded-lg border border-slate-200 shadow-md '>
      <img
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        className='min-w-[150px] h-[225px] rounded'
        loading='lazy'
      />
      <p className='text-center'>{original_name}</p>
      <p className='text-center text-sm text-slate-500'>{character}</p>
    </div>
  );
};
export default CardCast;
