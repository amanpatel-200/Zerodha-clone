import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import largestBroker from '../../assets/largestBroker.svg'
import presslogo from '../../assets/pressLogos.png'
const Awards = () => {
  return (
    <div className='w-full mt-35 px-10 flex flex-col gap-20  lg:flex-row justify-center items-center'>
       <div className='w-full lg:w-1/2  px-25 lg:pl-30  '>
         <img src={largestBroker} alt="Award Image" className='w-full max-w-md ' />
       </div>
       <div className='items-center w-full lg:w-1/2'>
         <h1 className='text-3xl mb-4'>Largest stock broker in India</h1>
         <p className='lg:max-w-xl'>2+ million Zerodha client contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
         
          <div className="flex flex-col sm:flex-row lg:gap-10 mt-6">

      <ul className="list-disc list-inside">
        <li>Futures and Options</li>
        <li>Commodity derivatives</li>
        <li>Currency derivatives</li>
      </ul>

      <ul className="list-disc list-inside">
        <li>Stocks & IPOs</li>
        <li>Direct mutual funds</li>
        <li>Bonds and Govt. Securities</li>
      </ul>

    </div>
         <img src={presslogo} alt=""  className='w-full max-w-md mt-8'/>
       </div>
    </div>
  )
}

export default Awards