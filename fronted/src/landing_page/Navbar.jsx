import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.svg'
import { IoReorderThreeOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='w-full fixed top-0 left-0 bg-white h-18 border-b-3 p-2 border-gray-100 flex justify-around items-center z-50'>
      <div className=''>
        <img src={logo} alt="logo" className='w-35'/>
      </div>
        <div className="flex items-center gap-8">
        <Link
          to="/signup"
         className="text-black no-underline hover:text-blue-600 transition duration-200"
        >
          Signup
        </Link>

        <Link
          to="/about"
          className="text-black no-underline hover:text-blue-600 transition duration-200"
        >
          About
        </Link>

        <Link
          to="/products"
          className="text-black no-underline hover:text-blue-600 transition duration-200"
        >
          Products
        </Link>

        <Link
          to="/pricing"
          className="text-black no-underline hover:text-blue-600 transition duration-200"
        >
          Pricing
        </Link>

        <Link
          to="/support"
          className="text-black no-underline hover:text-blue-600 transition duration-200"
        >
          Support
        </Link>

        <button className="text-3xl text-black hover:text-blue-600 transition duration-200">
          <IoReorderThreeOutline />
        </button>
      </div>
    </div>
  )
}

export default Navbar