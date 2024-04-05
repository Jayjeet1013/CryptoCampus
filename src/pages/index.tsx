import Image from "next/image";
import { Inter } from "next/font/google";
import CryptoInfo from "@/components/home/CryptoInfo";
import GetStarted from "@/components/home/GetStarted";
import Head from "next/head";
import Nav from "@/components/layout/Nav";
import { signIn, useSession } from "next-auth/react";
import { MouseEvent } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();

  const handleSignIn = async () => {
    try {
      await signIn(); // Sign in without provider to use default provider
    } catch (error) {
      console.error('Sign in failed:', error);
      // Handle error
    }
  };

  if (session.data === null) {
    return (
      <div className="flex mt-[13%] flex-col mx-auto max-w-xl items-center justify-center my-auto ">
        <p className="my-8 text-[32px] ">Welcome to CryptoCampus</p>  
        <button className="text-[24px] w-1/3 flex justify-center bg-green-500 p-3 rounded-md " onClick={handleSignIn}>Login</button>

      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Crypto-Campus</title>
        <meta name="KoinX" content="Koinx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/koinxlog.svg" />
      </Head>
      <div className="bg-[#D3E0E6] ">
        <Nav />
        <div className="flex flex-col gap-5 px-4 md:px-6 lg:px-10 max-w-[1450px] mx-auto justify-between pt-3 md:pb-16 ">
          <CryptoInfo />
          <GetStarted />
        </div>
      </div>
    </>
  );
}
