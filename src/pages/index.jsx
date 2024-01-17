import React from 'react';
import Navbar from '../components/Fragments/Navbar/Navbar';
import Hero from '../components/Fragments/Banner/Hero';
import HeadlineCards from '../components/Fragments/HeadlineCard/HeadlineCards';
import Category from '../components/Fragments/Categories/Category';
import Food from '../components/Fragments/CardProduct/Food';

function MainPage() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <HeadlineCards></HeadlineCards>
      <Food></Food>
      <Category></Category>
    </>
  );
}

export default MainPage;
