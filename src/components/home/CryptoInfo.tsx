import React from "react";
import LiveData from "../cryptoInfo/LiveData";
import Sentiments from "../cryptoInfo/Sentiments";
import AboutCrypto from "../cryptoInfo/AboutCrypto";
import AllData from "../cryptoInfo/AllData";

const CryptoInfo = () => {
  return (
    <div>
      <LiveData />
      <AllData />
      <AboutCrypto />
    </div>
  );
};

export default CryptoInfo;
