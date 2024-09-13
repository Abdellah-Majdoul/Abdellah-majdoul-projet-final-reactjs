import React, { useState } from 'react';
import images from "../../constant/images"
import { UseAppContext } from '../../context';
import { useNavigate } from 'react-router-dom';
const ShopPage = () => {
    const {dataJson} =UseAppContext()
    const newTab =dataJson
    const slicing=newTab.slice(0,6)
    const [sortOpt, setSortOpt] = useState();
    const navigate =useNavigate()
const clickSort = (e) => {
  setSortOpt(e.target.value);

  let sortedData = [...slicing]; 
  if (sortOpt === "Alphabetic A-Z") {
    sortedData.sort((a, b) =>a.title.localeCompare(b.title));
  } else if (sortOpt === "Alphabetic Z-A") {
    sortedData.sort((a, b) =>b.title.localeCompare(a.title));
  }
};

 

    
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
                <a href='#' className='text-2xl ms-2 hover:text-red-600'>best sellers</a>
                <a href='#' className='text-2xl ms-2 hover:text-red-600'>Women</a>
                <a href='#' className='text-2xl ms-2 hover:text-red-600'>Men</a>
                <a href='#' className='text-2xl ms-2 hover:text-red-600'>Feature</a>
                </div>
                <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>Price</h1>
                <div className='flex gap-5 ms-2 '>
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
            <div className='w-[70vw]  '>
            <div>
            <select 
              className='w-[16vw] py-2 px-2 border border-gray-400' 
              value={sortOpt} 
              onChange={clickSort}
            >
              <option value="Featured">Featured</option>
              <option value="Alphabetic A-Z">Alphabetic A-Z</option>
              <option value="Alphabetic Z-A">Alphabetic Z-A</option>
              <option value="sold">Sold</option>
              <option value="sale">Sale</option>
              <option value="sold out">Sold Out</option>
            </select>
          </div>
           <div className='flex justify-evenly pt-5 pb-5 flex-wrap gap-5'>
            {slicing.map((e)=>

                <div className='w-[30%] h-[70vh] flex flex-col gap-2 hover:p-3 ' onClick={() => { navigate(`/shop/${e.id}`) }}>
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
        </div>
    );
};

export default ShopPage;