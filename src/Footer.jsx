import React from 'react';
import logo from './assets/Logo.png';
const Footer = () => {
    return (
        <div className='bg-[#151925] pt-[48px] pb-[105px] px-[40px] md:px-[120px]'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 text-center md:text-left'>
                <div>
                    <img className='mx-auto md:-ms-2' src={logo} alt="" />
                    <h3 className='font-medium text-[24px] text-[#fff] mt-[26px] mb-[20px] md:mb-[58px]'>Product</h3>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>EmailGenie Reviews</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Alternatives</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Templates</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Write in 25+ Languages</a>
                </div>
                <div className='mt-[20px] md:pt-[120px]'>
                    <h3 className='font-medium text-[24px] text-[#fff]'>Company</h3>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Blog</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Careers</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Community</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Creator Programs</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Twitter</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Linkdin</a>
                </div>
                <div className='mt-[20px] md:pt-[120px]'>
                    <h3 className='font-medium text-[24px] text-[#fff]'>Support</h3>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Weekly Demos</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Contact Us</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Report a Bug</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Report on Outage</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>Request a New Feature</a>
                   
                </div>
                <div className='mt-[20px] md:pt-[120px]'>
                    <h3 className='font-medium text-[24px] text-[#fff]'>Use Cases</h3>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>For Students</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>For Recruiters</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>For Email Marketers</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>For Freelancer</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>For Content Creator</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>For Bloggers</a>
                    <a href="#" className='font-normal text-[18px] text-[#d6d6d6] my-2 block'>For Employee</a>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;