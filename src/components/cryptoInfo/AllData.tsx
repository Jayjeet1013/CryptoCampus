import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Sentiments from "./Sentiments";

const AllData = () => {
  return (
    <div>
      <div className="border-b px-3 md:px-6 py-2 my-3 flex gap-8 text-[#3E424A] overflow-x-auto">
        <h3>Overview</h3>
        <h3>Fundamentals</h3>
        <h3>NewsInsights</h3>
        <h3>Sentiment</h3>
        <h3>Team</h3>
        <h3>Technicals</h3>
        <h3>Tokenomics</h3>
      </div>
      <Sentiments />
    </div>
  );
};

export default AllData;
