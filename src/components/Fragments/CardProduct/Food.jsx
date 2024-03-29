import React from 'react';
import { data } from '../../../data/data';
import { useState } from 'react';
import Card from '../../Elements/Card/Card';
import FilterButton from '../../Elements/FilterButton/FilterButton';
import { MdFavorite } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

const Food = ({ children, style, showItem, filter }) => {
  const [foods, setFoods] = useState(data);
  const [favorite, setFavorite] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [dataOverlay, setDataOverlay] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleFavorite = (name, id, price, image, description) => {
    if (favorite.find((item) => item.name === name)) {
      setFavorite(favorite.filter((item) => item.name != name));
    } else {
      setFavorite([...favorite, { name, id, price, image, description }]);
    }
  };

  const handleOverlay = () => {
    setOverlay(!overlay);
    setCounter(0);
  };

  const handleClickImage = (name, id, price, image, description) => {
    setDataOverlay([
      {
        name: name,
        id: id,
        price: price,
        image: image,
        description: description,
      },
    ]);
  };

  const handleShowDetail = () => {
    setOverlay(!overlay);
  };

  // Filter Favorite
  const filterFavorit = () => {
    setFoods(favorite);
  };

  // Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className={(style, 'max-w-{1640px} m-auto px-4 py-16')}>
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        {children}
      </h1>

      {/* Filter Row*/}
      {filter ? (
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Filter Type */}
          <div>
            <p className="font-bold text-gray-700">Filter Type</p>
            <div className="flex justify-start flex-wrap gap-1">
              <FilterButton onClick={() => setFoods(data)}>All</FilterButton>
              <FilterButton onClick={() => filterFavorit()}>
                <div className="flex items-center gap-2" id="favorite">
                  <MdFavorite />
                  Favorite
                </div>
              </FilterButton>
              <FilterButton onClick={() => filterType('burger')}>
                Burger
              </FilterButton>
              <FilterButton onClick={() => filterType('pizza')}>
                Pizza
              </FilterButton>
              <FilterButton onClick={() => filterType('salad')}>
                Salad
              </FilterButton>
              <FilterButton onClick={() => filterType('chicken')}>
                Chicken
              </FilterButton>
            </div>
          </div>

          {/* Filter Price */}
          <div>
            <p className="font-bold text-gray-700">Filter Price</p>
            <div className="flex justify-start flex-wrap gap-1">
              <FilterButton onClick={() => filterPrice('$')}>$</FilterButton>
              <FilterButton onClick={() => filterPrice('$$')}>$$</FilterButton>
              <FilterButton onClick={() => filterPrice('$$$')}>
                $$$
              </FilterButton>
              <FilterButton onClick={() => filterPrice('$$$$')}>
                $$$$
              </FilterButton>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      {/* Display foods */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {foods.length > 0 ? (
          foods
            .slice(0, showItem)
            .map((item) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                handleClickImage={() =>
                  handleClickImage(
                    item.name,
                    item.id,
                    item.price,
                    item.image,
                    item.description
                  )
                }
                handleShowDetail={handleShowDetail}
                onClick={() =>
                  handleFavorite(
                    item.name,
                    item.id,
                    item.price,
                    item.image,
                    item.description
                  )
                }
                favorite={favorite}
                id={item.id}
              />
            ))
        ) : (
          <h1 className="font-bold text-2xl p-4 w-full">No One Matches Here</h1>
        )}
      </div>

      {/* Overlay */}
      {overlay ? (
        <div className="bg-black/90 fixed inset-y-4 inset-x-2 z-30 rounded-lg scale-100 duration-200 lg:inset-x-40 md:inset-x-10 h-max pb-10 shadow-orange-600/30 shadow-lg">
          <button
            className="w-full flex justify-end p-4"
            onClick={handleOverlay}
          >
            <AiOutlineClose size={30} className="text-white absolute" />
          </button>

          {/* Data */}
          {dataOverlay.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-auto h-3/4"
            >
              <div className="ml-10">
                <h1 className="text-white font-bold text-3xl pb-3">
                  {item.name}
                </h1>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-3/4 md:w-full h-[300px] md:h-[500px] object-cover rounded-t-lg"
                />
                <p className="text-white text-lg pt-2">Price : {item.price}</p>
              </div>
              {/* Description */}
              <div className="w-full text-xl px-5 md:pr-10 md:pl-10 ">
                <p className="text-white text-sm md:text-lg lg:text-xl">
                  {item.description}
                </p>

                {/* Add To Cart */}
                <div className="flex mt-7 justify-end ">
                  <div className="text-white flex items-center">
                    <button
                      onClick={() => {
                        counter > 0 && setCounter(counter - 1);
                      }}
                    >
                      -
                    </button>
                    <p>{counter}</p>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                  </div>
                  <button
                    className="bg-white text-black flex items-center py-2 rounded-full text-sm md:text-md lg:text-lg"
                    // onClick={handleRouterCart}
                  >
                    <BsFillCartFill size={20} className="mr-2 " /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" bg-black/90 fixed inset-y-4 inset-x-2 z-30 rounded-lg scale-0 duration-200 lg:inset-x-40 md:inset-x-10 "></div>
      )}
    </div>
  );
};

export default Food;
