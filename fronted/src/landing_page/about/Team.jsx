import React from 'react'
import nitinimage from "../../assets/nithinKamath.jpg"
const Team = () => {
  return (
   <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-10 mt-10 mb-10">

  <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
    <img
      src={nitinimage}
      className="rounded-full w-60 h-60 object-cover"
      alt="Nithin Kamath"
    />

    <h2 className="mt-3 text-xl">Nithin Kamath</h2>
    <br />
    <h3>Founder, CEO</h3>
  </div>

  <div className="w-full pl-10 lg:pl-2 lg:w-1/3 mb-10">
    <p>
      Nithin bootstrapped and founded Zerodha in 2010 to overcome the
      hurdles he faced during his decade long stint as a trader.
    </p>
    <br />
    <p>
      He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
      and the Market Data Advisory Committee (MDAC).
    </p>
<br />
    <p>Playing basketball is his zen.</p>
     <br /> 
    <p className='text-blue-500'>Connect on Homepage / TradingQnA / Twitter</p>
  </div>

</div>
  )
}

export default Team