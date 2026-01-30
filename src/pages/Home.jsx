import React from 'react';
import Hero from '../components/Hero';
import About from '../components/sections/About';

const Home = ({ images }) => {
    return (
        <>
            <Hero images={images} />
            <About />
        </>
    );
};

export default Home;
