import React from 'react';
import HeroSection from '../components/home/heroSection';
import SecondSection from '../components/home/secondSection';
import SecondCarousel from '../components/home/secondCarousel';
import ThirdSection from '../components/home/thirdSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <SecondSection/>
            <SecondCarousel/>
            <ThirdSection/>
        </div>
    );
};

export default HomePage;