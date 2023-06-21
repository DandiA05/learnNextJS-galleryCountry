import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import Head from "next/head";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <Head>
        <title>HELLO NEXTJS</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
