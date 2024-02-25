import Image from "next/image";
import { Inter } from "next/font/google";
import CryptoInfo from "@/components/home/CryptoInfo";
import GetStarted from "@/components/home/GetStarted";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className="flex flex-col lg:flex-row px-10 max-w-[1450px] mx-auto justify-between ">
    <CryptoInfo/>
    <GetStarted/>
  </div>
  );
}
