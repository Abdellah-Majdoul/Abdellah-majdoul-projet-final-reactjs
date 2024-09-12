import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { UseAppContext } from '../../context';
import images from '../../constant/images';

const SecondCarousel = () => {
    const { dataJson } = UseAppContext();

    // Function to chunk data into groups of 4
    const Arrayy = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const slides = Arrayy(dataJson, 4);
    console.log(slides);
    

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
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {slides.map((slideGroup, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex gap-10 justify-center items-center'>
                                {slideGroup.map((e, idx) => (
                                    <div className='flex-col gap-4' key={idx}>
                                        <img className='w-[400px] h-[50vh]' src={images[e.image]} alt="" />
                                        <div>
                                            <h1>{e.title}</h1>
                                            <p>{e.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SecondCarousel;
