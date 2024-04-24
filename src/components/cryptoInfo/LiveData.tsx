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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        if (response.status === 429) {
          setError("Wait for some minutes");
          return;
        }
        const data = await response.json();
        setCoinsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Limit exceeded, Wait for some minutes.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#FFFFFF] text-black flex flex-wrap gap-12 p-3 md:p-6 rounded-lg">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        coinsData.map((coin) => (
          <div key={coin.id}>
            <Link href={`/${coin.id}`}>
              <img src={coin.image} className="w-[30px] " alt={coin.name} />
              <p>{coin.name}</p>
              <p>Price: ${coin.current_price}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default LiveData;
