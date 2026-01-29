import React from 'react';
import Hero from '../components/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';

const Home = ({ images }) => {
    return (
        <>
            <Hero images={images} />
            <About />
            <Skills />
        </>
    );
};

export default Home;
