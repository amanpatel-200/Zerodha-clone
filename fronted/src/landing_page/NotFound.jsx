import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const NotFound = () => {
  return (
    <div>
     <Navbar/>
      <div className='w-full text-center mt-50 mb-45'>
       <h1 className='text-3xl mb-5'>404 Not Found</h1>
       <p className='text-lg text-gray-600 mb-5'>Sorry we are not found this page</p>
        
    </div>
     <Footer/>
    </div>
  )
}

export default NotFound