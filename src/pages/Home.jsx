import React from 'react';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Categories from '../components/Categories';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Hero />
      <Details />
      <Categories />
      <Testimonial />
    </>
  );
}

export default Home;
