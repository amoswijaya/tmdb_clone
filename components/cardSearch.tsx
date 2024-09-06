"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface CardSearchProps {
  original_title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  id: number;
}
const CardSearch = ({
  original_title,
  poster_path,
  release_date,
  overview,
  id,
}: CardSearchProps) => {
  const router = useRouter();
  return (
    <div className='border border-slate-300 shadow-md rounded-md flex gap-2 '>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className='min-w-[94px] h-[141px] rounded'
        loading='lazy'
      />
      <div className='flex flex-col justify-between p-2 pb-1'>
        <div>
          <p
            onClick={() => router.push(`/Movie/${id}`)}
            className='font-bold cursor-pointer hover:opacity-70'
          >
            {original_title}
          </p>
          <p className='text-gray-400'>{release_date}</p>
        </div>
        <p className='line-clamp-3'>{overview}</p>
      </div>
    </div>
  );
};

export default CardSearch;
