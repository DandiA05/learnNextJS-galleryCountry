import { Gallery } from "@/sections/gallery";
import { ResortList } from "@/sections/resortList";
import { Country } from "@prisma/client";
import Head from "next/head";
import { getContriesFromDb } from "@/queris/getCountries";

export default function Page({ country_list }: { country_list: Country[] }) {
  return (
    <main>
      <Head>
        <title>Resort List - The Best Resort</title>
      </Head>
      <ResortList country_list={country_list} />
    </main>
  );
}

export async function getStaticProps() {
  const countries = await getContriesFromDb();
  return {
    props: {
      country_list: countries,
    },
    revalidate: 60,
  };
}
