import React from 'react'

const Pricing = () => {
  return (
    <div className='w-full mt-20 '>
      <div className='w-full flex flex-col  lg:flex-row justify-between items-center  '>
      <div className='w-full lg:w-1/2 pl-10 lg:pl-42'>
        <h1 className='text-3xl'>Unbeatable pricing</h1>
        <p className='max-w-md text-gray-600 mt-4 mb-4'>We pioneered the concept of discount broking and price transparency in India.Flat fees and no hidden charges</p>
        <a href="" className='text-blue-600 '>See pricing</a>
      </div>
      <div className='w-full lg:w-1/2 px-10 lg:px-10 flex  mt-4  '>
         <div className='border border-gray-300 w-50  p-6 text-center'>
           <h1 className='text-4xl  text-amber-600'>₹ <span className='text-4xl text-amber-600'>0</span></h1> 
            <p>Free account opening</p>
         </div>
         <div className='border border-gray-300 w-50 text-center p-6   '>
            <h1 className='text-4xl  text-amber-600'>₹ <span className='text-4xl text-amber-600'>0</span></h1> 
            <p>Free equity delivery and direct mutual funds</p>
         </div>
         <div className='border border-gray-300 w-50  p-6 text-center'>
           <h1 className='text-4xl  text-amber-600'>₹ <span className='text-4xl text-amber-600'>20</span></h1> 
            <p>Intraday and F&O</p>
         </div>
         
      </div>
      </div>
    </div>
  )
}

export default Pricing