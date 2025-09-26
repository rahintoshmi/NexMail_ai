import React from 'react';
import logo from './assets/Logo.png';
const Navbar = () => {
    return (
        <div className='mx-auto'>
            <div className="navbar bg-[#290440] py-2 md:py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-[#D9D9D9] font-bold text-[18px]">
                            <li><a>Homepage</a></li>
                            <li>
                                <a>About</a>
                                
                            </li>
                            <li><a>Blog</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <a className=""><img className='-ms-6 md:-ms-0' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#D9D9D9] font-bold text-[18px]">
                        <li><a>Homepage</a></li>
                        <li>
                            
                           <a href="#">About</a>
                        </li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="#" className='text-[#FFFFFF] font-bold text-[18px] me-3'>Login</a>
                    <a className="bg-[#6a65ff] text-[#FFFFFF] font-bold text-[12px] md:text-[18px] rounded-[10px] px-[5px] md:px-[28px] py-[10px] md:py-[20px] text-center">Get Started - It's Free</a>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;