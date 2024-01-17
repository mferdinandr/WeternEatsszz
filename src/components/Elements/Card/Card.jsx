import { MdFavorite } from 'react-icons/md';

const Card = ({ name, price, image }) => {
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-4">
        <p className="font-bold">{name}</p>
        <div className="flex gap-5 items-center">
          {/* <MdFavorite size={20} onClick={onc}/> */}
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