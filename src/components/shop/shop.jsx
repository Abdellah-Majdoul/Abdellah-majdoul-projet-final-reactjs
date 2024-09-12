import React from 'react';
import images from "../../constant/images"
import { UseAppContext } from '../../context';
const ShopPage = () => {
    const {dataJson} =UseAppContext()
    return (
        <div id='shop'>
            <div className='pb-[10rem] relative'>
                <img className='w-full h-[30vh] bg-cover' src={images.banner5} alt=''/>
                <div className='absolute text-6xl font-bold top-[5rem] left-[45rem] text-white'>
                    <h1>PRODUCT</h1>
                </div>
            </div>
           <div className='flex justify-around '>
            <div className='w-[30vw] h-[100vh] gap-6 pt-6 ps-10'>
                <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>categorie</h1>
                <a href='#' className='text-2xl ms-2'>best sellers</a>
                <a href='#' className='text-2xl ms-2'>Women</a>
                <a href='#' className='text-2xl ms-2'>Men</a>
                <a href='#' className='text-2xl ms-2'>Feature</a>
                </div>
                <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>Price</h1>
                <div className='flex gap-5 ms-2'>
                  <input
                    type='checkbox'
                    id='option1'
                    name='option1'
                  
                  />
                  <label htmlFor='option1'>0-20</label>
                </div>
                <div className='flex gap-5 ms-2'>
                  <input
                    type='checkbox'
                    id='option2'
                    name='option2'
                   
                  />
                  <label htmlFor='option2'>20-40</label>
                </div>
              </div>
            </div>
            <div className='bg-red-500 w-[70vw]  flex justify-evenly pt-5 pb-5 flex-wrap gap-5'>
           
            {dataJson.map((e)=>

                <div className='w-[30%] h-[70vh] flex flex-col gap-2 hover:p-3'>
                    <img src={images[e.image]} alt='' className='bg-cover h-[80%] w-[100%]'/>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl'>{e.title}</h1>
                        <p>{e.price}</p>
                    </div>
                </div>
            )}
                
            </div>
           </div>
        </div>
    );
};

export default ShopPage;