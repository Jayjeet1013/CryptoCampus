import React from "react";
import LiveData from "../cryptoInfo/LiveData";
import Sentiments from "../cryptoInfo/Sentiments";
import AboutCrypto from "../cryptoInfo/AboutCrypto";
import AllData from "../cryptoInfo/AllData";

const CryptoInfo = () => {
  return (
    <div className=" w-[100%] ">
      <LiveData />
      {/* <AllData /> */}
      {/* <AboutCrypto /> */}
    </div>
  );
};

export default CryptoInfo;
