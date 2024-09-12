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
      let counter=0
      const goNext = () =>{
        counter ++
      }
      const goPrev = () =>{
        counter --
      }
    return (
        <div>
            <Slider {...settings} className='overflow-hidden relative'>
              <div className='relative'>
                <img src={images.carousel1} alt='' />
                <div className='absolute top-[8rem] flex flex-col gap-5 left-[42rem] text-center text-3xl text-white'>
                    <h5 className='text-xl'>women collection 2018</h5>
                    <h1  className='text-6xl font-bold'>New Arrivals</h1>
                    <button className='bg-white ms-10 py-2 w-[15vw] text-black rounded-full'>shop now</button>
                </div>
              </div>
              <div className='relative'> 
              <img src={images.carousel2} alt='' />
              <div className='absolute top-[8rem] flex flex-col gap-5 left-[42rem] text-center text-3xl text-white'>
              <h5 className='text-xl'>women collection 2018</h5>
              <h1  className='text-6xl font-bold'>New Arrivals</h1>
              <button className='bg-white ms-10 py-2 w-[15vw] text-black rounded-full'>shop now</button>
              </div>
              </div>
              <div className='relative'>
              <img src={images.carousel3} alt='' />
              <div className='absolute top-[8rem] flex flex-col gap-5 left-[42rem] text-center text-3xl text-white'>
              <h5 className='text-xl'>women collection 2018</h5>
              <h1  className='text-6xl font-bold'>New Arrivals</h1>
              <button className='bg-white ms-10 py-2 w-[15vw] text-black rounded-full'>shop now</button>
              </div>
              </div>
        
            </Slider>
            <div className='gap-5 flex '>
            <button className='bg-black px-4 py-2 text-white rounded-full absolute top-[15rem]' onClick={goNext}>next</button>
            <button className='bg-black px-4 py-2 text-white rounded-full absolute top-[15rem] right-0' onClick={goPrev}>prev</button>
            </div>
            </div>
        );
      }


export default HeroSection