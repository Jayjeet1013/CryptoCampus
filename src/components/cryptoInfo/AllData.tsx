import React from "react";
import Sentiments from "./Sentiments";

const AllData = () => {


  
  return (
    <div>
      <div className="border-b px-3 md:px-6 py-2 font-medium text-[16px]  my-5 flex gap-8 leading-[20px] text-[#3E424A] overflow-x-auto   ">
        <h3 className="hover-effect">Overview</h3>
        <h3 className="hover-effect">Fundamentals</h3>
        <h3 className="hover-effect">NewsInsights</h3>
        <h3 className="hover-effect">Sentiment</h3>
        <h3 className="hover-effect">Team</h3>
        <h3 className="hover-effect">Technicals</h3>
        <h3 className="hover-effect">Tokenomics</h3>
      </div>
      <Sentiments />
    </div>
  );
};

export default AllData;
