import React from 'react';
import HeroSection from '../components/home/heroSection';
import SecondSection from '../components/home/secondSection';
import SecondCarousel from '../components/home/secondCarousel';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <SecondSection/>
            <SecondCarousel/>
        </div>
    );
};

export default HomePage;