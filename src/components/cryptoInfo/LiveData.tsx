import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";
import { MdCurrencyRupee } from "react-icons/md";

interface BitcoinData {
  inr: number;
  usd: number;
  usd_24h_change: number;
}

const formatPriceWithCommas = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const LiveData: React.FC = () => {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true",
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
        );
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#FFFFFF] p-6 rounded-lg ">
      <div className=" flex gap-2 items-center text-center">
        <Image src={"/bitcoin.svg"} width={36} height={36} alt="bitcoinlogo" />

        <h1 className="text-[24px] font-semibold ">
          Bitcoin{" "}
          <span className="text-[#5D667B] font-semibold text-[18px] ">BTC</span>{" "}
        </h1>
        <div className="p-2 text-[16px] bg-[#808A9D] rounded-lg w-[80px] h-[40px] text-[#FFFFFF] text-center ">
          Rank #1
        </div>
      </div>

      {bitcoinData && (
        <div className="flex flex-col space-y-1">
          <div className="flex gap-12 items-center mt-8 ">
            <span className="font-semibold text-[28px] flex  items-center">
              <BsCurrencyDollar />
              {formatPriceWithCommas(bitcoinData.usd)}{" "}
            </span>
            <div className="flex gap-2 items-center">
              <span className="p-1 bg-[#EBF9F4] text-[#14B079] flex gap-1 items-center ">
                {" "}
                <GoTriangleUp size={"20px"} />{" "}
                {bitcoinData.usd_24h_change.toFixed(2)}%
              </span>

              <span className="text-[#768396] font-medium text-[14px] ">
                (24)
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <MdCurrencyRupee />
            <span className="font-bold ">
              {formatPriceWithCommas(bitcoinData.inr)}{" "}
            </span>
          </div>
        </div>
      )}
      {!bitcoinData && <p>Loading...</p>}
    </div>
  );
};

export default LiveData;
