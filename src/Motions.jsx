import React from 'react';
import motionImage from './assets/motion.png'; // static image
import { motion } from "framer-motion";

const Motions = () => {
    return (
        <div className='bg-[#2e0346] py-[50px] md:py-[130px] px-3 md:px-0'>
            <div className='p-[20px] md:p-[70px] flex flex-col-reverse md:flex-row gap-8 rounded-3xl bg-[#515def] w-full md:w-[1200px] mx-auto'>
                <div className=''>
                    <h3 className='font-normal text-[44px] text-[#fff]'>Explore Free Version now!</h3>
                    <p className='mt-[11px] mb-[30px] font-normal text-[18px] text-[rgba(255,255,255,0.75)]'>Try NexMail AI for free and experience how fast and easy writing emails can <br /> be. Generate cold emails, follow-ups, and more — no credit card required. <br /> Just prompt, click, and send.</p>
                    <div className='flex'> <button className='font-medium text-[18px] text-center text-[#313131] bg-[#fff] rounded-[6px] py-[15px] px-[22px]'>Join NexMail Ai</button>
                        <button className='font-medium text-[18px] text-center text-[#fff] border border-[#fff] py-[15px] px-[22px] rounded-[6px] ms-4'>Contact</button>
                    </div>
                </div>
                <div>
                    <motion.img
                        src={motionImage}
                        alt="Animated"
                        className=""
                        animate={{
                            y: [0, -20, 0, 20, 0],
                            rotate: [0, 5, -5, 5, 0],
                            scale: [1, 1.05, 1, 1.05, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Motions;
