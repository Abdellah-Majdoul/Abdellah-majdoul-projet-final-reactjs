import React from 'react';
import HeroSection from '../components/home/heroSection';
import SecondSection from '../components/home/secondSection';
import SecondCarousel from '../components/home/secondCarousel';
import ThirdSection from '../components/home/thirdSection';
import FourSection from '../components/home/fourSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <SecondSection/>
            <SecondCarousel/>
            <ThirdSection/>
            <FourSection/>
        </div>
    );
};

export default HomePage;