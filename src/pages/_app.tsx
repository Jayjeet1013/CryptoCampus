import Nav from "@/components/layout/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {

  
  return(
  <div>
    <SessionProvider session={pageProps.session}>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </SessionProvider>
  </div>
  )
  
  
}
