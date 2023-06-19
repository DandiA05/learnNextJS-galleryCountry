import { Inter } from "next/font/google";
import { Hero } from "@/sections/hero";
import { Places } from "@/sections/places";
import { COUNTRY_LIST } from "../../DATA/COUNTRY_LIST";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ country_list }: any) {
  // *****
  // TODO:
  // 1. please change how to get the countryList data using Static Side Generation (SSG) from "/api/resort/countries"

  //   const countryList = COUNTRY_LIST;

  // *****

  return (
    <main>
      <Head>
        <title>The Best Resort</title>
        <link rel="icon" href="/next.svg"></link>
      </Head>
      <Hero />
      <Places countryList={country_list} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://the-best-resort.vercel.app/api/resort/countries"
  );
  const data = await res.json();
  return {
    props: {
      country_list: data,
    },
    revalidate: 60,
  };
}
