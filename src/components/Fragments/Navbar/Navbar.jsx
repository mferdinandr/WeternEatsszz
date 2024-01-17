import React from 'react';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai';
import {
  BsFillCartFill,
  BsFillSaveFill,
  BsTelephoneInboundFill,
} from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosHome, IoMdHelpCircle } from 'react-icons/io';
import { MdFavorite, MdHelp, MdFastfood } from 'react-icons/md';
import { FaWallet } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="w-full mx-auto flex justify-between items-center p-4 fixed top-0 right-0 z-20 bg-white shadow-lg">
      {/* Left side */}
      <div className="flex items-center ">
        <div className="cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-xl sm:text-xl lg:text-4xl px-2">
          Western<span className="font-bold">Eatsszz</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full  text-[14px]">
          <p className="bg-black text-white rounded-full p-1 px-2 mr-1">
            Delivery
          </p>
          <p className="p-1 px-2">Pickup</p>
        </div>
      </div>

      {/* Seacrh Bar */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={30} />
        <input
          className="bg-transparent p-2 pl-3 w-full focus:outline-none"
          type="text"
          placeholder="Search foods..."
        />
      </div>

      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Navbar*/}
      {/* Overlay */}
      {navOpen && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}

      {/* Side Drawer Menu */}
      <div
        className={
          navOpen
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNavOpen(!navOpen)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Western<span className="font-bold">Eatsszz</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <IoIosHome size={25} className="mr-4" /> Home
            </li>
            <li className="text-xl py-4 flex">
              <MdFastfood size={25} className="mr-4" /> Our Foods
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="text-xl py-4 flex">
              <BsFillCartFill size={25} className="mr-4" /> Cart
            </li>
            <li className="text-xl py-4 flex">
              <BsTelephoneInboundFill size={20} className="mr-4" /> Contact Us
            </li>
            <li className="text-xl py-4 flex">
              <IoMdHelpCircle size={25} className="mr-4" /> Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
