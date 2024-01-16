import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Category from './components/Category';
import Food from './components/Food';

function App() {
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

export default App;
