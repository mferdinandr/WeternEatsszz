import { Children } from 'react';

const FilterButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
    >
      {children}
    </button>
  );
};

export default FilterButton;
