import React from 'react'
import HeroSection from './HeroSection'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Education from './Education'

const HomePage = () => {
  return (
    <div className='pt-25 h-screen'>
        <Navbar/>
        <HeroSection/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
    </div>
  )
}

export default HomePage