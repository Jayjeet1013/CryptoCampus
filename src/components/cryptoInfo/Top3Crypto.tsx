import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoTriangleUp } from "react-icons/go";

interface Coin {
  id: string;
  name: string;
  large: string;
  symbol: string;
  data: {
    price_change_percentage_24h?: {
      usd: number;
    };
  };
}

const Top3Crypto: React.FC = () => {
  const [top3Coins, setTop3Coins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        setTop3Coins(data.coins.map((coin: any) => coin.item));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-4 md:px-6 bg-[#FFFFFF] rounded-lg mt-1 md:mt-0 md:w-full w-[92%] md:relative  absolute ">
      <div className="text-[24px] text-[#0F1629] font-semibold mb-2 ">
        Trending Coins (24h)
      </div>
      {top3Coins.map((crypto) => (
        <div key={crypto.id} className="items-center text-[#0F1629] justify-between flex space-y-3 ">
          <div className="flex gap-1 items-center">
            <Link href={`/${crypto.id}`} className="flex gap-1">
            <img
              src={crypto.large}
              alt={crypto.name}
              className="mx-auto"
              style={{ width: "24px", height: "24px" }}
            />
            <h2 className="text-[16px] font-semibold ">
              {crypto.name}({crypto.symbol}){" "}
            </h2>
            </Link>
          </div>
          <div className="flex items-center bg-[#EBF9F4] rounded-lg p-1  ">
            <GoTriangleUp
              size={"20px"}
              className="mr-[2px]"
              style={{
                color:
                  crypto.data.price_change_percentage_24h &&
                  crypto.data.price_change_percentage_24h.usd >= 0
                    ? "#10B981"
                    : "#EF4444",
              }}
            />
            {crypto.data.price_change_percentage_24h ? (
              <p
                className={` text-[16px] ${
                  crypto.data.price_change_percentage_24h.usd >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {crypto.data.price_change_percentage_24h.usd.toFixed(2)}%
              </p>
            ) : (
              <p className="mt-2 text-lg">Price change data not available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top3Crypto;
