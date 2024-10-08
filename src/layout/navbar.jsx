import React from 'react';
import { FaRegUserCircle} from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/images/logo.png.webp"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
        <header class="text-slate-700 container pt-5  relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
  <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
   
      <img src={logo} alt="" />
    
    
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
      <li class="lg:mr-12"> <Link class="rounded text-gray-700 " to={"/home"}>Home</Link></li>
      <li class="lg:mr-12"><Link class="rounded text-gray-700 " to={"/shop"}>shop</Link></li>
      <li class="lg:mr-12"><Link class="rounded text-gray-700 " to={"/blog"}>Blog</Link></li>
      <li class="lg:mr-12"><Link class="rounded text-gray-700 " to={"/about"}>About</Link></li>
      <li class="lg:mr-12"><Link class="rounded text-gray-700 " to={"/contact"}>Contact</Link></li>
    </ul>
    <hr class="mt-4 w-full lg:hidden" />
    <div class="my-2 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
        <Link to={"/"}><FaRegUserCircle className='text-2xl' /></Link>
        <FaShoppingCart  className='text-2xl' />
    </div>
  </nav>
</header>

        </div>
        
        
      
        
    );
};

export default Navbar;