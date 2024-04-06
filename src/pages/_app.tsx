import Nav from "@/components/layout/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {

  
  return(
  <div>
    <SessionProvider session={pageProps.session}>
  <Nav/>
  <Component {...pageProps} /></SessionProvider>
  </div>
  )
  
  
}
