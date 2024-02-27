import Image from "next/image";
import { Inter } from "next/font/google";
import CryptoInfo from "@/components/home/CryptoInfo";
import GetStarted from "@/components/home/GetStarted";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>KoinX</title>
        <meta name="KoinX" content="Koinx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/koinxlogo.svg" />
      </Head>
      <div className="bg-[#D3E0E6] ">
        <div className="max-w-[1450px]  mx-auto px-4 md:px-6 lg:px-10 text-[#0F1629] pt-3 ">
         <span className="text-[#3E5765] "> Cryptocurrencies {">>"} </span>Bitcoin{" "}
        </div>
        <div className="flex flex-col   gap-5 lg:flex-row px-4 md:px-6 lg:px-10 max-w-[1450px] mx-auto justify-between pt-3 md:pb-16 ">
          <CryptoInfo />
          <GetStarted />
        </div>
      </div>
    </>
  );
}
