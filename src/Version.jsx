import React from 'react';
import version from './assets/version.png';
import { BiWorld } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi2";
import { BsDashLg } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
const Version = () => {
    return (
        <div className='bg-[#1a032b] pb-[64px] mx-auto px-5 md:px-[130px] pt-[20px] md:pt-[100px]'>
            <div className='flex flex-col md:flex-row gap-9'>
                <div className='mt-32 hidden md:block'>
                    <a href="#" className='ms-4 font-normal text-[16px] text-[#ff6161] bg-[rgba(255,97,97,0.15)] rounded-[6px] py-1 px-2'>v1.0</a>
                    <div className='flex whitespace-nowrap'><h3 className='mt-4 font-normal text-[16px] text-[#c2c7ca]'>July 2,2025</h3></div>
                </div>
                <div>
                    <h1 className='font-semibold text-[52px] text-[#fff]'> NexMail v1.0 (Pilot Version)</h1>
                    <div className='flex gap-2.5 items-center'><BiWorld style={{ color: 'blue' }} /> <h4 className='py-6 font-semibold text-[24px] text-[#fff]'>Launch Date: July 02, 2025</h4> </div>
                    <p className='mb-8 font-normal text-[20px] text-[rgba(255,255,255,0.8)] '>NexMail is an AI-powered email generation platform. Our mission is to simplify professional communication. We help <span className='font-bold text-[rgba(106,101,255,0.8)]'>users create high-quality emails</span> in seconds. NexMail offers smart suggestions for subject lines and content. Designed for digital marketers, professionals, and businesses alike. Our pilot version focuses on fast, reliable email creation. We aim to make email generation effortless and efficient for everyone.</p>
                    <img className='h-[200px] md:h-[302px]' src={version} alt="" />
                    <div className='mt-6 flex gap-2.5 items-center'><HiSparkles style={{ color: 'yellow' }} /><h4 className='font-semibold text-[24px] text-[#fff]'>  Features</h4></div>
                    <div className='flex gap-2.5 items-center'><BsDashLg style={{ color:'rgba(255, 255, 255, 0.5)' }} /><p className=' my-4 font-bold text-[20px] text-[rgba(255,255,255,0.8)]'>AI-Powered Email Generation: <span className='font-normal'>Create professional emails instantly with a single click.</span> </p></div>
                    <div className='flex gap-2.5 items-center'><BsDashLg style={{ color: 'rgba(255, 255, 255, 0.5)' }} /><p className='my-4 font-bold text-[20px] text-[rgba(255,255,255,0.8)]'>Customizable Templates: <span className='font-normal'>Tailor emails to your style and purpose.</span> </p></div>
                    <div className='flex gap-2.5 items-center'><BsDashLg style={{ color: 'rgba(255, 255, 255, 0.5)' }} /><p className='my-4 font-bold text-[20px] text-[rgba(255,255,255,0.8)]'>Subject Line Suggestions: <span className='font-normal'>Get automatic, attention-grabbing email titles.</span> </p></div>
                    <div className='flex gap-2.5 items-center'><BsDashLg style={{ color: 'rgba(255, 255, 255, 0.5)' }} /><p className='my-4 font-bold text-[20px] text-[rgba(255,255,255,0.8)]'>Smart Drafting Assistance: <span className='font-normal'>AI-guided suggestions to improve clarity and tone.</span> </p></div>
                    <div className='mt-6 flex gap-2.5 items-center'><IoDiamondOutline style={{ color: 'blue' }} /><h4 className='font-semibold text-[24px] text-[#fff]'>Improvements</h4></div> 
                    <div className='flex gap-2.5 items-center'><BsDashLg style={{ color: 'rgba(255, 255, 255, 0.5)' }} /><p className='my-4 font-bold text-[20px] text-[rgba(255,255,255,0.8)]'>Faster Performance: <span className='font-normal'>Generate emails quickly without delays.</span> </p></div>
                    <div className='flex gap-2.5 items-center'><BsDashLg style={{ color: 'rgba(255, 255, 255, 0.5)' }} /><p className='my-4 font-bold text-[20px] text-[rgba(255,255,255,0.8)]'>User-Friendly Interface: <span className='font-normal'>Simplified design for easy navigation and email management.</span> </p></div>
                    <div className='flex gap-2.5 items-center'><BsDashLg style={{ color: 'rgba(255, 255, 255, 0.5)' }} /><p className='my-4 font-bold text-[20px] text-[rgba(255,255,255,0.8)]'>Seamless Copy & Export: <span className='font-normal'>Easily copy or export generated emails for immediate use.</span> </p></div>
                    <div className='flex gap-2.5 items-center'><BsDashLg style={{ color: 'rgba(255, 255, 255, 0.5)' }} /><p className='my-4 font-bold text-[20px] text-[rgba(255,255,255,0.8)]'>Error Handling: <span className='font-normal'>Improved reliability for consistent email generation.</span> </p></div>
                </div>
            </div>

        </div>
    );
};

export default Version;