import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
    return <header className="p-4 bg-black text-coolGray-800 bg-opacity-50 fixed z-10 w-full" id="header">
        <div className="container flex justify-between h-16 mx-auto">
            <a href="#header" aria-label="Back to homepage" className="flex items-center p-2">
                <img src='https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png' alt='cgv' />
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex">
                <li className="flex">
                    <NavLink to="/home" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white border-violet-600 font-medium" activeClassName="border-b-4 border-red-500 font-bold">Home</NavLink>
                </li>
                <li className="flex">
                    <NavLink to="/news" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white border-violet-600 font-medium" activeClassName="border-b-4 border-red-500 font-bold">News</NavLink>
                </li>
                <li className="flex">
                    <NavLink to="/contact" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white border-violet-600 font-medium" activeClassName="border-b-4 border-red-500 font-bold">Contact</NavLink>
                </li>

            </ul>
            <div className="items-center flex-shrink-0 hidden lg:flex text-white font-bold">
                <button className="self-center px-8 py-3 rounded hover:text-red-400">Đăng nhập</button>
                <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600  hover:text-red-400">Đăng ký</button>
            </div>
            <button className="p-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </header>

}