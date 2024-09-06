import React from "react";
import { FaHeart, FaList, FaBookmark, FaPlay } from "react-icons/fa";
interface Props {
  path: string;
  poster_path: string;
  title: string;
  overview: string;
  genres: string[];
  release_date: string;
  runtime: number;
  tagline: string;
  vote_average: number;
}
const BannerDetail = ({
  path,
  poster_path,
  title,
  overview,
  genres,
  release_date,
  runtime,
  tagline,
  vote_average,
}: Props) => {
  return (
    <section className='relative w-full h-[590px] py-10 flex items-center justify-center  '>
      {/* First Layer: Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${path}')`,
        }}
      />

      {/* Second Layer: Color Overlay */}
      {/* <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70'></div> */}

      {/* Content Layer */}
      <div className='relative z-10 flex   h-full text-white mt-14 max-w-[80%]'>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          className='w-[300px] h-[450px] rounded-lg '
        />
        <div className='ml-10 flex flex-col justify-between'>
          <div>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <div className='flex flex-row mt-4'>
              <h2>{release_date}</h2>
              <ul className='flex flex-row gap-2 ml-1'>
                <li>{genres.join(", ")}</li>
                <li>{runtime} min</li>
              </ul>
            </div>

            <div className='flex flex-row items-center gap-2'>
              <div
                className='radial-progress text-[#21D07A] bg-[#032541] mt-4 transform transition-transform duration-300 hover:scale-125 '
                style={
                  {
                    "--value": vote_average * 10,
                    "--size": "60px",
                  } as React.CSSProperties
                }
                role='progressbar'
              >
                {(vote_average * 10).toFixed(0)}%
              </div>
              <p className=' font-bold'>
                User
                <br /> Score
              </p>
            </div>
            <div className='flex flex-row gap-2 mt-4'>
              <div className='bg-[#032541] rounded-full p-4 cursor-pointer'>
                <FaList size={14} />
              </div>
              <div className='bg-[#032541] rounded-full p-4 cursor-pointer'>
                <FaHeart size={14} />
              </div>
              <div className='bg-[#032541] rounded-full p-4 cursor-pointer'>
                <FaBookmark size={14} />
              </div>
              <div className='flex flex-row items-center cursor-pointer hover:opacity-70'>
                <FaPlay size={14} />
                <p className='ml-2'>Play Now</p>
              </div>
            </div>
          </div>
          <div className='mb-16'>
            <p className='text-gray-400'>{tagline}</p>
            <h2 className='text-xl font-bold'>Overview</h2>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDetail;
