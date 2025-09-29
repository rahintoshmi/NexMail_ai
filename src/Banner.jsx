import React from 'react';
import banner from './assets/home.png';

const Banner = () => {
    return (
        <div className='bg-[#290440] pt-10 '>
            <div className='text-center '>
                <h3 className='pt-3 judson-regular font-normal text-[30px] md:text-[82px] bg-gradient-to-b from-white to-[#b372cf] bg-clip-text text-transparent'>
                    Designed for <br /> Your Productivity.
                </h3>
                <p className='font-normal text-[20px] text-[#fff] mb-[20px] md:mb-[82px]'>
                    Smart, secure, and user-friendly email services that put you first.
                </p>
            </div>

            <div className='relative w-full px-4 md:px-4 mx-auto'>
                <div
                    className='
                        shadow-[0_-19px_70px_0_rgba(140,69,255,0.4),_0_-20px_70px_0_rgba(140,69,255,0.25)]
                        bg-[linear-gradient(270deg,_#0d0718_0%,_rgba(15,8,27,0)_47.85%,_#0b0614_100%)]
                        rounded-[10px] relative'>
                    <img
                        src={banner}
                        alt="Banner"
                        className='w-full block bg-[#290440] rounded-[9px]'/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#290440]/100 to-[#290440]/0 rounded-[9px]"></div>
                </div>
            </div>

        </div>
    );
};

export default Banner;