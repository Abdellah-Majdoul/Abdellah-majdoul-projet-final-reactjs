import React from 'react';
import images from "../../constant/images"
const ShopPage = () => {
    return (
        <div>
            <div className='pb-[10rem] relative'>
                <img className='w-full h-[30vh] bg-cover' src={images.banner5} alt=''/>
                <div className='absolute text-6xl font-bold top-[5rem] left-[45rem] text-white'>
                    <h1>PRODUCT</h1>
                </div>
            </div>
           <div className='flex justify-around'>
            <div className='bg-black w-[30vw] h-[100vh]'>

            </div>
            <div className='bg-red-600 w-[60vw] h-[100vh]'>
            </div>
           </div>
        </div>
    );
};

export default ShopPage;