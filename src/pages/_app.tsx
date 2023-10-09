import "@/styles/globals.scss";
import "@/styles/components/dataCards.scss";
import "@/styles/components/keyHiglights.scss";
import Head from "next/head";

import type { AppProps } from "next/app";
import Providers from "@/redux/Provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
