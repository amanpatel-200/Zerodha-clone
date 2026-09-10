import React from 'react'

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  
  learnMore,
  
}) => {
  return (
    <div className="w-full flex flex-col items-start justify-center p-5 mt-10  lg:mt-40 lg:flex-row">
          
          
          <div className="w-full  lg:w-1/4 mt-10 ">
            <h1 className="text-2xl font-medium">{productName}</h1>
            <p  className="mt-5 text-lg">{productDescription}</p>
            <div className="flex py-3">
              <a href={learnMore} className="px-10 text-blue-600 text-lg">Learn More →</a>
            </div>
            
            <div className="w-full  lg:w-1/2  ">
            <img src={imageUrl} alt="product image" className="max-w-full" />
          </div>
          </div>
        </div>
  )
}

export default RightSection