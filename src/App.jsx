import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <HeadlineCards></HeadlineCards>
      <Food></Food>
    </>
  );
}

export default App;
