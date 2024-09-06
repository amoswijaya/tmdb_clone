import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#032541] flex justify-center  h-[325px] text-white gap-4 pt-10'>
      <img
        src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
        alt='tmdb logo'
        className='w-[130px] h-[94px]'
      />
      <section className='flex flex-col gap-2'>
        <span className='font-bold'>THE BASICS</span>
        <span>About TMDB</span>
        <span>Contact Us</span>
        <span>Support Forums</span>
        <span>API</span>
        <span>System Status</span>
      </section>
      <section className='flex flex-col gap-2'>
        <span className='font-bold'>GET INVOLVED</span>
        <span>Contribution Bible</span>
        <span>Add New Movie</span>
        <span>Add New MovieAdd New TV Show</span>
      </section>
      <section className='flex flex-col gap-2'>
        <span className='font-bold'>LEGAL</span>
        <span>Terms of Use</span>
        <span>API Terms of Use</span>
        <span>Privacy Policy</span>
        <span>DMCA Policy</span>
      </section>
    </footer>
  );
};

export default Footer;
