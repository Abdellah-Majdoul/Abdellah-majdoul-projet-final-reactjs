import React from 'react';
import { useParams } from 'react-router-dom';
import { UseAppContext } from '../../context';
import images from "../../constant/images"

const ShopDetail = () => {
    const {id}=useParams()
    const {dataJson} =UseAppContext()
    const newTab =dataJson
    
    const findobj =newTab.find((e => e.id == id))
    
    return (
        <div>
        { findobj &&

            <div class="bg-gray-100">
            <div class="container mx-auto px-4 py-8">
            <div class="flex flex-wrap -mx-4">
            
            <div class="w-full md:w-1/2 px-4 mb-8">
            <img src={images[findobj.image]} className='h-[80vh] w-[40vw] bg-cover' alt="Product"
            class="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage"/>
            
            </div>
            
            
            <div class="w-full md:w-1/2 px-4">
            <h2 class="text-3xl font-bold mb-2">{findobj.title}</h2>
            <div class="mb-4">
            <span class="text-2xl font-bold mr-2">{findobj.price}</span>
            <span class="text-gray-500 line-through">$399.99</span>
            </div>
            
            <p class="text-gray-700 mb-6">{findobj.about}</p>
            
            <div className='border w-[4vw] text-center py-1 bg-red-400 '>
            {findobj.price}
            </div>
            <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2">Color:</h3>
            <div class="flex space-x-2">
            <button
            class="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
            <button
            class="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
            <button
            class="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
            </div>
            </div>
            <div class="mb-6 flex gap-5">
            <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="6"                               class="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
              </div>
              <div className='flex gap-9'>            
              <p class="text-gray-600 mb-4">Brand: {findobj.brand}</p>
              <p className='text-gray-600 mb-4'>categorie: {findobj.categories.join(" - ")}</p>
              </div>
              
              <div class="flex space-x-4 mb-6">
              <button
                              class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                              stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                              </svg>
                              Add to Cart
                              </button>
                              <button
                              class="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                              stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                              </svg>
                              Wishlist
                              </button>
                              </div>
                              
                             <div className='flex flex-col gap-10'>
                             <div>
                             <h3 class="text-lg font-semibold mb-2">Description:</h3>
                             <div class="list-disc list-inside text-gray-700">
                               <p>{findobj.description}</p>
                           </div>
                           </div>
                           <div>
                             <h3 class="text-lg font-semibold mb-2">Additional Infromations:</h3>
                             <div class="list-disc list-inside text-gray-700">
                               <p>{findobj.additionalInfromations}</p>
                           </div>
                           </div>
                             </div>
              </div>
              </div>
              </div>
              
              
              </div>
            }
        </div>
    );
};

export default ShopDetail;