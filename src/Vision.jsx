import React from 'react';
import avatar from './assets/Avatar.png';
import tes from './assets/Testimonial.png';
const Vision = () => {
    return (
        <div className='relative py-[50px] md:py-[200px] bg-[radial-gradient(circle,_#8a5bb8_0%,_#290440_60%,_#150220_100%)]'>
            <div className='text-center'>
                <h3 className='font-medium text-[56px] text-[#fff]'>Our Vision</h3>
                <p className='mt-[28px] font-normal text-[20px] text-[#fff] mb-[20px] md:mb-[50px]'>Making email generation effortless for digital <br /> marketers and businesses.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-center mt-[50px]'>
                <div className="relative inline-block xl:hidden">
                    <img src={avatar} alt="Avatar" className="relative z-10" />
                    <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 
                  w-[400px] h-[400px] rounded-full bg-[#8C45FF] opacity-70 blur-[254px] z-20 pointer-events-none">
                    </div>
                </div>
                <div className='xl:hidden'>
                    <h3 className='font-medium text-[23px] text-[#fff]'>“NexMail empowers marketers <br /> to create high-quality emails in <br /> seconds, helping them reach <br /> audiences faster and smarter.”</h3>
                    <h5 className='mt-[20px] mb-2.5 font-normal text-[16px] text-[#fff]'>Prashatna Dey </h5>
                    <p className='font-normal text-[14px] text-[rgba(255,255,255,0.7)]'>CEO, NexGenix</p>
                </div>
                <div className="relative hidden xl:block">
                    <img src={tes} alt="Avatar" className="relative z-10" />
                    <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 
                  w-[400px] h-[400px] rounded-full bg-[#8C45FF] opacity-70 blur-[254px] z-20 pointer-events-none">
                    </div>
                </div>
                <div className='absolute right-[28%] hidden xl:block'>
                    <h3 className='font-medium text-[23px] text-[#fff]'>“NexMail empowers marketers <br /> to create high-quality emails in <br /> seconds, helping them reach <br /> audiences faster and smarter.”</h3>
                    <h5 className='mt-[20px] mb-2.5 font-normal text-[16px] text-[#fff]'>Prashatna Dey </h5>
                    <p className='font-normal text-[14px] text-[rgba(255,255,255,0.7)]'>CEO, NexGenix</p>
                </div>
            </div>
        </div>
    );
};

export default Vision;