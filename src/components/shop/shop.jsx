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
    const hand=e.target.value
  setSortOpt(hand);

  const sortedData = [...slicing]; 
  if (hand === "Alphabetic A-Z") {
      sortedData.sort((a, b) =>a.title.localeCompare(b.title));
    } else if (hand === "Alphabetic Z-A") {
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
           <div className='flex flex-col gap-[6vh]'>
                    <div className='flex flex-col gap-[2vh]'>
                        <p className='text-[30px] font-bold'>Categories</p>
                        <div className='flex flex-col gap-2 ms-3'>
                            <p className='text-gray-500 hover:text-red-600 cursor-pointer'>Best Seller (8 items)</p>
                            <p className='text-gray-500 hover:text-red-600 cursor-pointer'>Featured (8 items)</p>
                            <p className='text-gray-500 hover:text-red-600 cursor-pointer'>Men (8 items)</p>
                            <p className='text-gray-500 hover:text-red-600 cursor-pointer'>Women (8 items)</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[2vh]'>
                        <p className='text-[30px] font-bold'>color</p>
                        <div className='ms-3'>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="black" />
                                  <label htmlFor="black" className='text-gray-500'>Black</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="gray" />
                                  <label htmlFor="gary" className='text-gray-500'>Gray</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="red" />
                                  <label htmlFor="red" className='text-gray-500'>Red</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[2vh]'>
                        <p className='text-[30px] font-bold'>Price</p>
                        <div className='ms-3'>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="black" />
                                  <label htmlFor="black" className='text-gray-500'>0-20</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="gray" />
                                 <label htmlFor="gary" className='text-gray-500'>20-50</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[2vh]'>
                        <p className='text-[30px] font-bold'>Size</p>
                        <div className='ms-3'>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="black" />
                                  <label htmlFor="black" className='text-gray-500'>L</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="gray" />
                                  <label htmlFor="gary" className='text-gray-500'>M</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="red" />
                                  <label htmlFor="red" className='text-gray-500'>S</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="red" />
                                  <label htmlFor="red" className='text-gray-500'>XL</label>
                            </div>
                        </div>
                    </div>

                    <input type="text" placeholder='Search.....' className='p-3 w-64'/>
                    
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

                <div className='w-[30%] h-[70vh] flex flex-col gap-2 hover:p-3 '>
                    <img src={images[e.image]} alt='' className='bg-cover h-[80%] w-[100%]'/>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl hover:text-red-600 cursor-pointer'  onClick={() => { navigate(`/shop/${e.id}`) }}>{e.title}</h1>
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