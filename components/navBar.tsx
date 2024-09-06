"use client";
import React from "react";
import { useRouter } from "next/navigation";
const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <nav className='bg-[#032541] py-4 px-2 md: lg:px-48 fixed w-full flex flex-row text-white z-50'>
      <div className='flex flex-row md:gap-8 gap-2  w-full'>
        <img
          onClick={() => router.push("/")}
          className='w-[100px] md:w-[154px] h-[20px] inline-block cursor-pointer'
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
        />
        <span className=' cursor-pointer'>Movies</span>
        <span className=' cursor-pointer'>Tv Shows</span>
        <span className=' cursor-pointer'>People</span>
        <span className=' cursor-pointer'>More</span>
      </div>
    </nav>
  );
};

export default NavBar;
