import React from 'react';
import images from "../../constant/images"
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
import { UseAppContext } from '../../context';
import { useNavigate } from 'react-router-dom';
const SecondCarousel = () => {
    const {dataJson} =UseAppContext()
    const navigate = useNavigate()
    return (
        <div>
        <p className='text-[35px] font-semibold text-center pt-[6rem] pb-10'>FEATURED PRODUCTS</p>
        <div>
<Swiper
slidesPerView={4} 
slidesPerGroup={4}
loop={true} 
navigation={true} 
modules={[Navigation]}
className="mySwiper"
  >
  {dataJson.map((e)=>
        <SwiperSlide >
                    <div className='flex  gap-5 justify-center items-center '>
                        <div className='flex-col pb-[5rem] '>
                        <img src={images[e.image]} className='w-[23vw] h-[50vh]' alt="" />
                        <div>
                            <h1 className='cursor-pointer hover:text-red-600' onClick={() => { navigate(`/shop/${e.id}`) }}>{e.title}</h1>
                            <p>{e.price}</p>
                        </div>
                        </div>
                        
                        
                        </div>  
                        </SwiperSlide>
                    )}
       
      

  </Swiper>
        </div>
    </div>
    );
};

export default SecondCarousel;