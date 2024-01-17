import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Dropdown = ({ ask, answer }) => {
  const [openAnswer, setOpenAnswer] = useState(false);

  const handleShow = () => {
    setOpenAnswer(!openAnswer);
  };

  return (
    <div className="px-4 lg:px-20 mb-3 ">
      {/* Ask */}
      <div
        className="flex items-center gap-3 border hover:cursor-pointer py-1 px-2 border-black rounded-lg"
        onClick={handleShow}
      >
        <h1>{ask}</h1>
        {openAnswer ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {/* Answer */}
      {openAnswer ? (
        <div className="translate-y-0 duration-300 bg-orange-200/50 py-1 px-6 ">
          {answer}
        </div>
      ) : (
        <div className="translate-y-[-10px] duration-300 py-1 px-6"></div>
      )}
    </div>
  );
};

export default Dropdown;
