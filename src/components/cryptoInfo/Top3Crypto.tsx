import React, { useEffect, useState } from "react";

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
        setTop3Coins(data.coins.slice(0, 3).map((coin: any) => coin.item));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-4 md:px-6 bg-[#FFFFFF] rounded-lg mt-1 md:mt-4 md:w-full w-[92%] md:relative  absolute ">
      <div className="text-[24px] font-semibold mb-2 ">
        Trending Coins (24h)
      </div>
      {top3Coins.map((crypto) => (
        <div key={crypto.id} className="items-center justify-between flex ">
          <div className="flex gap-1 items-center">
            <img
              src={crypto.large}
              alt={crypto.name}
              className="mx-auto"
              style={{ width: "24px", height: "24px" }}
            />
            <h2 className="text-[16px] font-semibold ">
              {crypto.name}({crypto.symbol}){" "}
            </h2>
          </div>
          {crypto.data.price_change_percentage_24h ? (
            <p
              className={`mt-2 text-[16px] ${
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
      ))}
    </div>
  );
};

export default Top3Crypto;
