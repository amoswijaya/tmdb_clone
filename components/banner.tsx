"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Banner: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  return (
    <section className='bg-banner-bg h-[500px] bg-cover text-white display flex flex-col-reverse pb-20 px-9 bg-center rounded  '>
      <div className=' relative w-full'>
        <input
          type='text'
          className='w-full h-12 p-4 text-black outline-none rounded-full bg-white'
          placeholder='Search for movies, tv show, person..'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type='submit'
          className='absolute inset-y-0 right-0 px-4 py-2 bg-gradient-to-r from-[#1CD3AE] to-[#04B8DD] text-white font-semibold rounded-full hover:bg-blue-600 transition duration-200'
          onClick={() => router.push(`/Search?query=${query}`)}
        >
          Search
        </button>
      </div>
      <div className='flex flex-col gap-4 pb-10'>
        <h1 className='text-5xl font-bold'>Welcome.</h1>
        <h2 className='text-2xl font-bold'>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
      </div>
    </section>
  );
};

export default Banner;
