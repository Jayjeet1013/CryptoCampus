import Image from "next/image";
import { Inter } from "next/font/google";
import CryptoInfo from "@/components/home/CryptoInfo";
import GetStarted from "@/components/home/GetStarted";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className="flex flex-col lg:flex-row ">
    <CryptoInfo/>
    <GetStarted/>
  </div>
  );
}
