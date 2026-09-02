import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-15'>
      <h1 className='text-3xl mb-2'>Zerodha Products</h1>
      <p className='text-2xl mb-2 text-slate-500'>Sleek, modern, and intuitive trading platforms</p>
      <span className='text-xl'>Check out our<Link 
      to="/about"
        className="text-blue-600 no-underline scale-95 text-md"> investment offerings →</Link></span>
    </div>
  )
}

export default Hero