import React from "react";

const CardSkeleton: React.FC = () => {
  return (
    <div className=' animate-pulse flex flex-col'>
      <div className='w-[150px] h-[225px] rounded-md bg-slate-200'></div>
      <div className='h-4 bg-slate-100 rounded w-2/3 mt-2'></div>
      <div className='h-4 bg-slate-100 rounded w-1/3 my-2'></div>
    </div>
  );
};

export default CardSkeleton;
