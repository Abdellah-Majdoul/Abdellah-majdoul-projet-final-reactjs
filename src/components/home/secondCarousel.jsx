import React from 'react';
import images from "../../constant/images"
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
const SecondCarousel = () => {
    
    return (
        <div>
        <p className='text-[35px] font-semibold text-center pt-[6rem] pb-10'>FEATURED PRODUCTS</p>
        <div>
<Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[ Navigation]}
    className="mySwiper "
  >
        <SwiperSlide >
                    <div className='flex  gap-10 justify-center items-center '>
                        <div className='flex-col'>
                        <img src={images.itemcart1} className='' alt="" />
                        <div>
                            <h1>Boxy T-Shirt with Roll Sleeve Detail</h1>
                            <p>£12.00</p>
                        </div>
                        </div>
                        
                        
                    </div>  
        </SwiperSlide>
        <SwiperSlide >
                <div className='flex gap-3 justify-center items-center '>
                    <img src={images.itemcart1} className='' alt="" />
                   
                </div>  
        </SwiperSlide>
      

  </Swiper>
        </div>
    </div>
    );
};

export default SecondCarousel;