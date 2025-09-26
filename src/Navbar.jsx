import React from 'react';
import logo from './assets/Logo.png';

const Navbar = () => {
    return (
        <div className='mx-auto'>
            <div className="navbar bg-[#290440] py-2 md:py-6 px-4 md:px-16">

                {/* Navbar Start */}
                <div className="navbar-start w-full flex justify-between items-center lg:justify-start">
                    {/* Logo */}
                    <a>
                        <img src={logo} alt="Logo" className="h-14 md:h-20" />
                    </a>

                    {/* Hamburger for small devices */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        {/* Dropdown menu */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content -ms-40 mt-3 p-4 shadow-lg bg-[#290440] rounded-box w-56 space-y-2 text-[#D9D9D9] font-bold text-[16px]"
                        >
                            <li><a>Homepage</a></li>
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a href="#">Login</a></li>
                            <li>
                                <a className="bg-[#6a65ff] text-white text-center font-bold px-4 py-2 rounded w-full block">
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Navbar Center (Large devices) */}
                <div className="navbar-center mx-auto hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 text-[#D9D9D9] font-bold text-[18px] space-x-6">
                        <li><a href='#' className='hover:bg-[#6a65ff]'>Homepage</a></li>
                        <li><a href="#" className='hover:bg-[#6a65ff]'>About</a></li>
                        <li><a href="#" className='hover:bg-[#6a65ff]'>Blog</a></li>
                        <li className='me-0'><a href="#" className='hover:bg-[#6a65ff]'>Contact Us</a></li>
                    </ul>
                </div>

                {/* Navbar End (Large devices) */}
                <div className="navbar-end hidden md:flex items-center space-x-4">
                    <a href="#" className='text-[#FFFFFF] font-bold text-[18px] '>Login</a>
                    <a className="bg-[#6a65ff] text-[#FFFFFF] font-bold text-[18px] rounded-[10px] px-6 py-3 text-center">
                        Get Started 
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
