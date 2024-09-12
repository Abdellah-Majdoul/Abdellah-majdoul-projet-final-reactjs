import React from 'react';
import HeroSection from '../components/home/heroSection';
import SecondSection from '../components/home/secondSection';
import SecondCarousel from '../components/home/secondCarousel';
import ThirdSection from '../components/home/thirdSection';
import FourSection from '../components/home/fourSection';
import FiveSection from '../components/home/fiveSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <SecondSection/>
            <SecondCarousel/>
            <ThirdSection/>
            <FourSection/>
            <FiveSection/>
        </div>
    );
};

export default HomePage;