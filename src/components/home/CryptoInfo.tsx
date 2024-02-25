import React from 'react'
import LiveData from '../cryptoInfo/LiveData'
import Sentiments from '../cryptoInfo/Sentiments'
import AboutCrypto from '../cryptoInfo/AboutCrypto'

const CryptoInfo = () => {
  return (
    <div>
      <LiveData/>
      <Sentiments/>
      <AboutCrypto/>
    </div>
  )
}

export default CryptoInfo