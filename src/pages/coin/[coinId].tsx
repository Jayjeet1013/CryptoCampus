import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  description: { [key: string]: string };
  current_price: number;
}

const CoinDetails: React.FC = () => {
  const router = useRouter();
  const { coinId } = router.query;
  const [coinData, setCoinData] = useState<CoinData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (coinId) {
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
          const data = await response.json();
          setCoinData(data);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [coinId]);

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{coinData.name}</h1>
      <p>Symbol: {coinData.symbol}</p>
      <p>Current Price: ${coinData.current_price}</p>
      <p>About: {coinData.description.en}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CoinDetails;
