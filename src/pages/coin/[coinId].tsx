import React, { useEffect, useState } from 'react';

interface Cryptoinfo {
  id: string;
  symbol: string;
  name: string;
  image: string;
  description: { [key: string]: string }; 
  current_price: number;
}

const Index = ({coinId}:{coinId:string}) => {
  const [cryptodata, setCryptoData] = useState<Cryptoinfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/${coinId}");
        const datas = await response.json();
        setCryptoData(datas);
      } catch (error) {
        console.error("Got error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
  {cryptodata && (
        <div>
          <p>Symbol: {cryptodata.symbol}</p>
          <p>Name: {cryptodata.name}</p>
          {/* <p>About :- {cryptodata.description.en}</p> */}
          
        </div>
      )}
    </div>
  );
};

export default Index;
