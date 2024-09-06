import React from "react";

const CardMedia: React.FC = ({ src }: any) => {
  return (
    <div className='auto'>
      <img className='h-[300px]' src={src} />
    </div>
  );
};

export default CardMedia;
