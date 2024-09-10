import React from "react";
import { useRouter } from "next/navigation";
export interface Movie {
  title: string;
  date: string;
  poster_path: string;
  id: number;
  vote_average: number;
}
const CardMovie = ({ title, date, poster_path, id, vote_average }: Movie) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${id}`)}
      className='flex flex-col transition-colors duration-300 ease-in-out cursor-pointer'
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className='min-w-[150px] h-[225px] rounded '
        loading='lazy'
      />
      <div
        className='mt-[-20px] left-2 relative radial-progress text-[#21D07A] bg-[#032541]  transform transition-transform duration-300 hover:scale-125 '
        style={
          {
            "--value": vote_average * 10,
            "--size": "40px",
          } as React.CSSProperties
        }
        role='progressbar'
      >
        <p className=' text-xs'>{(vote_average * 10).toFixed(0)}%</p>
      </div>
      <span className=' font-bold'>{title}</span>
      <span className='text-gray-400'>{date}</span>
    </div>
  );
};

export default CardMovie;
