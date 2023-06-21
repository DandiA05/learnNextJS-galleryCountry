import { generateRandomImg } from "@/lib/generateRandomImg";
import Image from "next/image";
import { useRouter } from "next/router";
import { RESORT_LIST } from "../../../DATA/RESORT_LIST";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { data } from "autoprefixer";
import exp from "constants";
import Head from "next/head";
import prisma from "@/lib/prisma";

export default function Page({ restore_data }: any) {
  // *****
  // TODO:
  // 1. please change how to get the resort data using Server Side Rendering (SSR) according to the url slug from "/api/resort/detail/slug"
  //   const data = RESORT_LIST[0];
  // *****

  console.log(restore_data);

  return (
    <main>
      <Head>
        <title>{restore_data.name}</title>
        <link rel="icon" href="/next.svg"></link>
      </Head>
      <Image
        src={restore_data?.image_url}
        alt={restore_data?.name}
        width={1440}
        height={900}
        className="w-full max-h-[70vh] object-cover"
      />
      <div className="text-center max-w-[1200px] mx-auto my-40">
        <h1 className="text-4xl mx-auto w-fit mb-8">{restore_data?.name}</h1>
        <p>{restore_data?.description}</p>
      </div>
    </main>
  );
}

export async function getServerSideProps({ query: { slug } }: any) {
  // const res = await fetch(
  //   `https://the-best-resort.vercel.app/api/resort/detail/` + slug
  // );
  // const data = await res.json();
  const data = await prisma.resort.findFirst({
    where: {
      slug: slug,
    },
  });
  return {
    props: {
      restore_data: data,
    },
  };
}
