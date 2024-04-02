import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
 
}

const LiveData: React.FC = () => {
  const [coinsData, setCoinsData] = useState<CoinData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        const data = await response.json();
        console.log(data);
        setCoinsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#FFFFFF] flex flex-wrap gap-12 p-3 md:p-6 rounded-lg">
      {coinsData.map((coin) => (
        <div key={coin.id}>
          <Link href={coin.id}>
          <img src={coin.image} className="w-[30px] " alt={coin.name} />
          <p>{coin.name}</p>
          <p>Price: ${coin.current_price}</p>
          </Link>
         
        </div>
      ))}
    </div>
  );
};

export default LiveData;
