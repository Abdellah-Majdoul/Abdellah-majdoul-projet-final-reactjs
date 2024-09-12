import React from 'react';
import images from "../../constant/images"
const SecondSection = () => {
    return (
        <div className='flex justify-evenly pt-[5rem]'>
          <div className=' w-[30vw] h-[150vh] flex flex-col gap-5'>
            <div className=' w-[100%] h-[50%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={images.banner2} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] hover:bg-red-600 '>SUNGLASSES</button></div>
            </div>
            <div className='bg-[#ebebeb] w-[100%] h-[50%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={images.shop} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] hover:bg-red-600  '>SUNGLASSES</button></div>

            </div>
          </div>
          <div className=' w-[30vw] h-[150vh] flex flex-col gap-5'>
            <div className=' w-[100%] h-[30%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={images.item3} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] hover:bg-red-600  '>SUNGLASSES</button></div>

            </div>
            <div className=' w-[100%] h-[70%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={images.banner3} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] hover:bg-red-600  '>SUNGLASSES</button></div>

            </div>
          </div>
          <div className=' w-[30vw] h-[150vh] flex flex-col gap-5'>
            <div className=' w-[100%] h-[50%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={images.item1} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] hover:bg-red-600 '>SUNGLASSES</button></div>

            </div>
            <div className=' w-[100%] h-[50%] relative'>
            <img className='w-[100%] h-[100%] bg-cover' src={images.itemcart3} alt=''/>
            <div><button className='bg-white  py-3 px-7  absolute bottom-4 left-[10vw] hover:bg-red-600 '>SUNGLASSES</button></div>

            </div>
          </div>
          
        </div>
    );
};

export default SecondSection;