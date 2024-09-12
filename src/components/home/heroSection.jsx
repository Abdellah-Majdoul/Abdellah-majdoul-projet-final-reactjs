import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  images from "../../constant/images"
const HeroSection = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div>
            <Slider {...settings} className='overflow-hidden'>
              <div>
                <img src={images.carousel1} alt='' />
              </div>
              <div>
              <img src={images.carousel2} alt='' />
              </div>
              <div>
              <img src={images.carousel3} alt='' />
              </div>
            
            </Slider>
            </div>
        );
      }


export default HeroSection