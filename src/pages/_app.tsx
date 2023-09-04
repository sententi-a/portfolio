import { AppProps } from "next/app";
import Head from "next/head";
import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>yeomhyeji | portfolio</title>
        <link rel="icon" href="/logo.svg"></link>
        <meta
          name="description"
          content="YeomHyeji is a front-end developer. You wanna know about her?"
        />
        <meta property="og:title" content="YeomHyeji" />
        <meta property="og:description" content="Check out her works!" />
        <meta property="og:image" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
