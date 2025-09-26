import React from 'react';
import avatar from './assets/Avatar.png';
import line from './assets/Line4.png'
import line2 from './assets/Line1.png';
const Vision = () => {
    return (
        <div className='relative py-[50px] md:py-[200px] bg-[radial-gradient(circle,_#8a5bb8_0%,_#290440_60%,_#150220_100%)]'>
            <div className='text-center'>
                <h3 className='font-medium text-[56px] text-[#fff]'>Our Vision</h3>
                <p className='mt-[28px] font-normal text-[20px] text-[#fff]'>Making email generation effortless for digital <br /> marketers and businesses.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-center mt-[50px]'>
                <div className=''>
                    <img src={avatar} alt="" />
                </div>
                <div className=''>
                    <h3 className='font-medium text-[23px] text-[#fff]'>“NexMail empowers marketers <br /> to create high-quality emails in <br /> seconds, helping them reach <br /> audiences faster and smarter.”</h3>
                    <h5 className='mt-[20px] mb-2.5 font-normal text-[16px] text-[#fff]'>Prashatna Dey </h5>
                    <p className='font-normal text-[14px] text-[rgba(255,255,255,0.7)]'>CEO, NexGenix</p>
                    </div>
            </div>
            <div className='absolute top-[340px] left-[400px] hidden md:block'>
                <img src={line2} alt="" />
            </div>
            <div className='absolute top-[340px] left-[600px] hidden md:block'>
                <img src={line2} alt="" />
            </div>
            <div className='absolute top-[420px] ms-[90px]  hidden md:block'>
                <img src={line} alt="" />
            </div>
            <div className='b-0 ms-[90px] hidden md:block'>
            <img src={line} alt="" />
           </div>
            
            
        </div>
    );
};

export default Vision;