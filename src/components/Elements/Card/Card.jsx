import { useEffect } from 'react';
import { useState } from 'react';
import { MdFavorite } from 'react-icons/md';

const Card = ({
  name,
  price,
  image,
  onClick,
  className,
  favorite,
  id,
  handleShowDetail,
  handleClickImage,
}) => {
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
      <img
        onClick={handleShowDetail}
        src={image}
        alt={name}
        className="w-full h-[200px] object-cover rounded-t-lg"
        onClickCapture={handleClickImage}
      />
      <div className="sm:flex justify-between px-2 py-2 sm:py-4 ">
        <p className="font-bold">{name}</p>
        <div className="flex gap-5 justify-between text-end pt-2 sm:pt-0">
          <MdFavorite
            size={20}
            className={
              favorite.find((item) => item.id === id)
                ? 'text-rose-600 scale-125 hover:cursor-pointer'
                : 'text-black hover:scale-110 hover:cursor-pointer'
            }
            onClick={onClick}
            // className={className}
          />
          <p>
            <span className="bg-orange-500 text-white p-1 rounded-full">
              {price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
