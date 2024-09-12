import React from 'react';
import logo from "../../constant/images"

const ThirdSection = () => {
    return (
        <div className='bg-[#f2f2f2] w-full h-[80vh] flex gap-8 items-center justify-center '>
            <div className='w-[40vw] h-[85%] relative  hover:p-2 '>
                <img src={logo.banner4} className='w-[100%] h-[100%] ' alt=''/>
                <div className='absolute bottom-[10rem] left-[10rem] flex flex-col gap-5'>
                    <h1 className='text-3xl text-center text-white font-bold'>The Beauty</h1>
                    <h1 className='text-6xl text-white font-bold'>Look Book</h1>
                    <p className='text-2xl text-center text-white '>view collection</p>
                </div>
            </div>
            <div className='bg-red-700 w-[50vw] h-[85%] '>
                <div className='flex items-center justify-center flex-col relative'>
                <img src={logo.shop} className='' alt=''/>
                <div className='absolute bottom-[8rem]'><h1>titre</h1>
                <p>12</p>
                </div>
                </div>
                <div className=' flex justify-center gap-10 '>
                    <div className='text-white flex flex-col border px-2 py-1 '><h1> -2082</h1><span>Days</span></div>
                    <div className='text-white flex flex-col border px-2 py-1 '><h1> -21</h1><span>hrs</span></div>
                    <div className='text-white flex flex-col border px-2 py-1 '><h1> -47</h1><span>min</span></div>
                    <div className='text-white flex flex-col border px-2 py-1 '><h1> -42</h1><span>Secs</span></div>
                </div>
                
            </div>
        </div>
    );
};

export default ThirdSection;