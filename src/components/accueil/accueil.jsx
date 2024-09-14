import React from 'react';
import { Link } from 'react-router-dom';

const Accueil = () => {
    return (
        <div className=' w-full h-[100vh] flex justify-center items-center'>
            <div className=' h-[90%] w-[90%] flex gap-10 '>
                <div className='border w-[50%] h-[40%] ps-10 flex flex-col gap-2 '>
                    <h1 className='text-5xl '>New Customer</h1>
                    <h3 className='text-gray-400 text-2xl'>Register Account</h3>
                    <p className='text-gray-500 text-xl'>By creating an account you will be able to shop 
                    faster, be up to date on an order's status, and keep 
                    track of the orders you have previously made.</p>
                    <button className='bg-black w-[10vw] py-4 text-white' ><Link to={"/register"}>CONTINUE</Link></button>
                </div>
                <div className=''>
                <div class="flex  w-full items-center justify-center  bg-gray-50">
                <div class="">
                  <div class=" flex flex-col sm:w-[40rem] rounded-lg border bg-white  px-4">
                    <div class="flex-auto p-6 ">                     
                      <h4 class="text-5xl ">Returning Customer</h4>
                      <p class="mb-6 text-gray-500">I am a returning customer</p>
              
                      <form id="" class="mb-4" action="#" method="POST">
                        <div class="mb-4">
                          <label for="email" class="mb-2 inline-block text-xl font-medium uppercase text-gray-700">Email </label>
                          <input type="text" class="py-4 block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email-username" placeholder="Enter your email or username" autofocus="" />
                        </div>
                        <div class="mb-4">
                          <div class="flex justify-between">
                            <label class="mb-2 inline-block text-xl font-medium uppercase text-gray-700" for="password">Password</label>
                            <a href="auth-forgot-password-basic.html" className="cursor-pointer  text-indigo-500 no-underline hover:text-indigo-500">
                              <small class=" ">Forgot Password?</small>
                            </a>
                          </div>
                          <div class="relative flex w-full flex-wrap items-stretch">
                            <input type="password" id="password" className="py-4 relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" name="password" placeholder="············" />
                          </div>
                        </div>
                        
                        <div className="mb-4 flex items-center">
                          <button class="grid  cursor-pointer select-none rounded-md border border-indigo-500 bg-black py-4 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none w-[15vw]" type="submit">Sign in</button>
                          <span> or <Link className='hover:text-red-600 cursor-pointer text-2xl' to={"/home"}>Return Store</Link></span>
                        </div>
                      </form>
              
                     
                    </div>
                  </div>
                  
                </div>
              </div>
              
                </div>
            </div>
        </div>
    );
};

export default Accueil;