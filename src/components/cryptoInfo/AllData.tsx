import React from 'react'
import Sentiments from './Sentiments'

const AllData = () => {
  return (
    <div>
        <div className="border-b py-2 flex gap-8 text-[#3E424A] overflow-hidden ">
        <h3>Overview</h3>
        <h3>Fundamentals</h3>
        <h3>News Insights</h3>
        <h3>Sentiment</h3>
        <h3>Team</h3>
        <h3>Technicals</h3>
        <h3>Tokenomics</h3>
      </div>
        <Sentiments/>
    </div>
  )
}

export default AllData