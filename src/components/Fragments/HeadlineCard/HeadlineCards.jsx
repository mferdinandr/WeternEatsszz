import React from 'react';

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 pb-1 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Suns's Out, BOGO's Out</p>
          <p className="px-2">Throught 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/8104576/pexels-photo-8104576.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Suns's Out, BOGO's Out</p>
          <p className="px-2">Throught 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/8104576/pexels-photo-8104576.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Suns's Out, BOGO's Out</p>
          <p className="px-2">Throught 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/8104576/pexels-photo-8104576.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
