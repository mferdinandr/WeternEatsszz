import React from 'react';
import { data } from '../../../data/data';
import { useState } from 'react';
import Card from '../../Elements/Card/Card';
import FilterButton from '../../Elements/FilterButton/FilterButton';
import { MdFavorite } from 'react-icons/md';

const Food = () => {
  const [foods, setFoods] = useState(data);
  const [favorite, setFavorite] = useState([]);

  const handleFavorite = (name, id, price, image) => {
    if (favorite.find((item) => item.name === name)) {
      setFavorite(favorite.filter((item) => item.name != name));
    } else {
      setFavorite([...favorite, { name, id, price, image }]);
    }
  };
  console.log(foods);

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
    <div className="max-w-{1640px} m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row*/}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-start flex-wrap gap-1">
            <FilterButton onClick={() => setFoods(data)}>All</FilterButton>
            <FilterButton onClick={() => filterFavorit()}>
              <div className="flex items-center gap-2">
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
            <FilterButton onClick={() => filterPrice('$$$')}>$$$</FilterButton>
            <FilterButton onClick={() => filterPrice('$$$$')}>
              $$$$
            </FilterButton>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.length > 0 ? (
          foods.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onClick={() =>
                handleFavorite(item.name, item.id, item.price, item.image)
              }
              favorite={favorite}
              id={item.id}
            />
          ))
        ) : (
          <h1 className="font-bold text-2xl p-4 w-full">No One Matches Here</h1>
        )}
      </div>
      <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white w-1/2 flex justify-center mx-auto mt-8">
        More Foods
      </button>
    </div>
  );
};

export default Food;
