import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "@/components/layout/Nav";
import { signIn, useSession } from "next-auth/react";
import { MouseEvent } from "react";
import Data from "@/components/home/Data";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Crypto-Campus</title>
        <meta name="KoinX" content="Koinx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/koinxlog.svg" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <div className="bg-[#D3E0E6] py-10 ">
        <div className="flex flex-col gap-5 px-4 md:px-6 lg:px-10 max-w-[1450px] mx-auto justify-between pt-3 md:pb-16 ">
          <Data/>
        </div>
      </div>
    </>
  );
}
