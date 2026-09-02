import React from 'react'
import education from "../../assets/education.svg"
const Education = () => {
  return (
    <div className='w-full flex flex-col px-10 lg:mt-20 lg:flex-row justify-between items-center'>
      <div className='w-full lg:w-1/2 mb-20 lg:pl-50  '>
        <img src={education} className='w-full max-w-md' alt="" />
      </div>
       <div className='w-full lg:w-1/2 px-2'>
         <h1 className='text-3xl'>Free and open market education</h1>
         <div className='mt-8'>
          <p className='text-[16px] max-w-lg text-gray-700 mb-4'>Varsity,the largest online stock market education book in the world covery everything from the basic to advance trading</p>
          <a href="" className='text-[16px] text-blue-600 '>Varsity</a>
         </div>
         <div className='mt-4'>
          <p className='text-[16px] max-w-lg text-gray-700 mb-4'>Trading Q&A , the most active trading and investment community in India for all your market related queries</p>
          <a href="" className='text-[16px] text-blue-600 ' >TradingQ&A</a>
         </div>
       </div>
    </div>
  )
}

export default Education