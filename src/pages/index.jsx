import React from 'react';
import Navbar from '../components/Fragments/Navbar/Navbar';
import Hero from '../components/Fragments/Banner/Hero';
import HeadlineCards from '../components/Fragments/HeadlineCard/HeadlineCards';
import Category from '../components/Fragments/Categories/Category';
import Food from '../components/Fragments/CardProduct/Food';

function MainPage() {
  const handleLoadMore = () => {
    window.location.href = '/foods';
  };

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <HeadlineCards></HeadlineCards>
      <Food>Top Rate Our Menu</Food>
      <button
        className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white w-1/2 flex justify-center mx-auto"
        onClick={handleLoadMore}
      >
        Load More
      </button>
      <Category></Category>
    </>
  );
}

export default MainPage;
