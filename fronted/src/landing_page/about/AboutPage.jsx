import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Team from './Team'
import Footer from '../Footer'

const AboutPage = () => {
  return (
    <div className='pt-25 h-screen'>
      <Navbar/>
      <Hero/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default AboutPage