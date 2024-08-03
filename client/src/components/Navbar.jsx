import React, { useState } from 'react'
import logo from "./Assets/Frontend_Assets/logo.png"
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
const Navbar = () => {
const [menu , setMenu] = useState("shop")
    return (


        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">SHOPPER</span>
                </Link>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col md:p-0 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row">
                        <li>
                            <Link to="/" className="block  px-3" onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr className='h-1 bg-red-500 rounded-md' />:<></>}</Link>
                        </li>
                        <li>
                            <Link to="/mens" className="block  px-3" onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr className='h-1 bg-red-500 rounded-md ' />:<></>}</Link>
                        </li>
                        <li>
                            <Link to="/womens" className="block  px-3" onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr className='h-1 bg-red-500 rounded-md' />:<></>}</Link>
                        </li>
                        <li>
                            <Link to="/kids" className="block  px-3" onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr className='h-1 bg-red-500 rounded-md ' />:<></>}</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className='flex gap-x-3'>
                        <button type="button" className="text-black border border-gray-400 focus:outline-none  font-medium rounded-full text-md px-7 py-2 text-center md:block hidden "><Link to="/login">Login</Link></button>
                        <div className="relative scale-75">
                        <Link to="/cart"><IoMdCart className='text-4xl cursor-pointer' /></Link>
                            <span className="absolute -top-2 left-5 rounded-full bg-red-500 p-0.5 px-2 text-md text-red-50">4</span>
                        </div>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
