import React from 'react';
import banner from './assets/Tool.png';

const Home = () => {
    return (
        <div className="pt-10 md:pt-50 pb-5 md:pb-20 relative bg-[radial-gradient(circle,_#8a5bb8_0%,_#290440_60%,_#150220_100%)] shadow-[0_42px_54px_0_rgba(0,0,0,0.31)] flex flex-col items-center justify-center">
            {/* Banner image (in front, positioned above) */}
            <img
                src={banner}
                alt="Banner"
                className="relative z-10 w-full mb-4  transition-transform duration-500 hover:scale-90"
            />
            {/* Blurred background circle (behind, centered) */}
            <div className="absolute rounded-full bg-[#622a9a] filter blur-[224px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-0"></div>
        </div>
    );
};

export default Home;