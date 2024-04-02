import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  description: { [key: string]: string };
  market_data: { current_price: { usd: number } };
  links: { whitepaper: string };
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

<div className="flex flex-col   gap-5 px-4 md:px-6 lg:px-10 max-w-[1450px] mx-auto justify-between pt-3 md:pb-16 ">
        <h1>{coinData.name}</h1>
      <p>Symbol: {coinData.symbol}</p>
      <p>Current Price: ${coinData.market_data.current_price.usd}</p>
      <p>About: {coinData.description.en}</p>
      <p>
          <Link href={coinData.links.whitepaper} target="_blank" >
            Whitepaper
          </Link>
        </p>
        </div>
      
    </div>
  );
};

export default CoinDetails;
