import React from 'react'
import HomeHero from '../../assets/homeHero.png'
const HeroSection = () => {
  return (
    <div className='w-full  '>
        <div className='w-full flex justify-center p-3 '>
          <img src={HomeHero} className='w-[55%]' alt="" />
        </div>
        <div className='w-full mt-20 text-center p-2 '>
          <h1 className='text-3xl mb-5'>Invest in Everything</h1>
          <p className='text-xl mb-6'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className='bg-blue-400 p-2 w-50 rounded cursor-pointer text-xl text-white text-center hover:bg-black'>Sign up for free </button>
        </div>
    </div>
  )
}

export default HeroSection