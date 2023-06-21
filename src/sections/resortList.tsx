import Link from "next/link";
import { RESORT_LIST } from "../../DATA/RESORT_LIST";
import { Sidebar } from "./sidebar";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Country } from "@prisma/client";

const getRecordList = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const ResortList = ({ country_list }: { country_list: Country[] }) => {
  // *****
  // TODO:
  // 1. please change how to get the data using client-side fetching from "/api/resort/list"
  // 2. check if the country parameter and filter the data accordingly

  //   const data = RESORT_LIST;
  const route = useRouter();
  const params = route.query.country;

  const { data, error, isLoading } = useSWR<any>(
    () => "/api/resort/list" + (params ? "?country=" + params : ""),
    getRecordList
  );

  if (isLoading) return <p>...Loading...</p>;
  if (!data) return <p>....No data....</p>;

  // *****
  return (
    <section className="p-8 flex gap-16 justify-between">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-6">Resort List</h1>
        <div className="flex flex-col gap-12 w-fit">
          {data?.map((resort: any) => (
            <Link
              key={resort.slug}
              className="flex gap-32 text-xl shadow-lg items-center justify-between p-8 rounded-sm hover:bg-slate-200 transition-all"
              href={`/resort/${resort.slug}`}
            >
              {resort.name}
              <Image
                src={resort.image_url}
                alt={resort.name}
                width={520}
                height={300}
                className="object-cover h-32 w-60"
              />
            </Link>
          ))}
        </div>
      </div>
      <Sidebar country_list={country_list} />
    </section>
  );
};
