import React from 'react';
import logo from "../../constant/images"
const FourSection = () => {
    return (
        <div>
            <div className='h-[20vh] flex justify-center items-center'>
                <h1 className='text-3xl font-bold'>OUR BLOG</h1>
            </div>
            <div className=' h-[80vh] flex gap-[5rem] justify-center items-center'>
            <div className='bg-white w-[27vw] h-[90%] flex flex-col gap-3'>
            <img src={logo.blog1} alt='' className='w-[100%] h-[50%]'/>
            <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>Black Friday Guide: Best Sales & Discount Codes</h1>
            <p>by fashe-theme Admin on Dec 28,2017</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
            </div>
            </div>
                <div className='bg-white w-[27vw] h-[90%] flex flex-col gap-3'>
                <img src={logo.blog2} alt='' className='w-[100%] h-[50%]'/>
                <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Black Friday Guide: Best Sales & Discount Codes</h1>
                <p>by fashe-theme Admin on Dec 28,2017</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                </div>
            </div>
                <div className='bg-white w-[27vw] h-[90%] flex flex-col gap-3'>
                <img src={logo.blog3} alt='' className='w-[100%] h-[50%]'/>
                <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Black Friday Guide: Best Sales & Discount Codes</h1>
                <p>by fashe-theme Admin on Dec 28,2017</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FourSection;