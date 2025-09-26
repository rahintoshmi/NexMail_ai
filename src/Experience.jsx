import React from 'react';
import g from './assets/gauge-1.png';
import b from './assets/chart.png';
import c from './assets/s.png';
import d from './assets/list-checks.png';
import e from './assets/target-1.png';
import f from './assets/bell-ringing.png';
import h from './assets/magic-wand1.png';
import j from './assets/cursor-click1.png';
import k from './assets/files1.png';
const Experience = () => {
    return (
        <div className='bg-[radial-gradient(circle,_#8a5bb8_0%,_#290440_60%,_#150220_100%)] py-10 md:py-20'>
            <div className='border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(134deg,#151925_0%,#151925_100%)] py-[20px] md:py-[76px] px-5 md:px-[50px] w-full md:w-[1200px] mx-auto'>
                <h1 className='text-[#fff] text-[30px] md:text-[56px] font-medium mb-5'>Elevate your email experience.</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div className='p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition transform duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'>
                        <div className='flex items-center gap-3'><img className='w-[16px] h-[17px]' src={g} alt="" /><h2 className='font-medium text-[16px] text-[#fff]'>User-friendly dashboard</h2></div>
                        <p className='font-normal text-[16px] text-[rgba(255,255,255,0.7)] mt-[10px]'>Manage all your emails efficiently in one place.</p>
                    </div>
                    <div className='p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition transform duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'>
                        <div className='flex items-center gap-3'><img className='w-[16px] h-[17px]' src={b} alt="" /><h2 className='font-medium text-[16px] text-[#fff]'>AI-Powered Email Generation</h2></div>
                        <p className=' mt-[10px] font-normal text-[16px] text-[rgba(255,255,255,0.7)]'>Create high-quality content with a single click.</p>
                    </div>
                    <div className='p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition transform duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'>
                        <div className='flex items-center gap-3'><img className='w-[16px] h-[17px]' src={c} alt="" /><h2 className='font-medium text-[16px] text-[#fff]'>Customizable Templates</h2></div>
                        <p className=' mt-[10px] font-normal text-[16px] text-[rgba(255,255,255,0.7)]'>Tailor emails to your style and purpose.</p>
                    </div>
                    <div className='p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition transform duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'>
                        <div className='flex items-center gap-3'><img className='w-[16px] h-[17px]' src={d} alt="" /><h2 className='font-medium text-[16px] text-[#fff]'>Subject Line Suggestions</h2></div>
                        <p className=' mt-[10px] font-normal text-[16px] text-[rgba(255,255,255,0.7)]'>Craft attention-grabbing email titles automatically.</p>
                    </div>
                    <div className='p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition transform duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'>
                        <div className='flex items-center gap-3'><img className='w-[16px] h-[17px]' src={e} alt="" /><h2 className='font-medium text-[16px] text-[#fff]'>Content Optimization</h2></div>
                        <p className=' mt-[10px] font-normal text-[16px] text-[rgba(255,255,255,0.7)]'> Improve clarity, tone, and engagement instantly.</p>
                    </div>
                    <div className='p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition transform duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'>
                        <div className='flex items-center gap-3'><img className='w-[16px] h-[17px]' src={f} alt="" /><h2 className='font-medium text-[16px] text-[#fff]'>Multi-Purpose Emails</h2></div>
                        <p className=' mt-[10px] font-normal text-[16px] text-[rgba(255,255,255,0.7)]'>Generate emails for marketing, professional, or personal use.</p>
                    </div>
                    <div className='p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition transform duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'>
                        <div className='flex items-center gap-3'><img className='w-[16px] h-[17px]' src={h} alt="" /><h2 className='font-medium text-[16px] text-[#fff]'>Fast & Efficient</h2></div>
                        <p className=' mt-[10px] font-normal text-[16px] text-[rgba(255,255,255,0.7)]'> Save time with instant email creation.</p>
                    </div>
                    <div className='p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition transform duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'>
                        <div className='flex items-center gap-3'><img className='w-[16px] h-[17px]' src={j} alt="" /><h2 className='font-medium text-[16px] text-[#fff]'>Smart Drafting</h2></div>
                        <p className=' mt-[10px] font-normal text-[16px] text-[rgba(255,255,255,0.7)]'>Get AI-guided suggestions while writing emails.</p>
                    </div>
                    <div className='p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition transform duration-300 hover:bg-black/40 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'>
                        <div className='flex items-center gap-3'><img className='w-[16px] h-[17px]' src={k} alt="" /><h2 className='font-medium text-[16px] text-[#fff]'>Seamless Copy & Send</h2></div>
                        <p className=' mt-[10px] font-normal text-[16px] text-[rgba(255,255,255,0.7)]'>Easily export or copy emails for immediate use.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Experience;