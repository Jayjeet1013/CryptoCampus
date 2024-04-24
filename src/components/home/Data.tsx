import React from 'react'
import LiveData from '../cryptoInfo/LiveData'
import Top3Crypto from '../cryptoInfo/Top3Crypto'


const Data = () => {
  return (
  
      <div className='pt-20 px-6 '>
        <LiveData />
        <Top3Crypto />
      </div>
   
  );
}

export default Data