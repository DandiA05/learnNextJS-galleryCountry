// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { RESORT_LIST } from "../../../../DATA/RESORT_LIST";
import { delay } from "@/lib/delay";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check if country is in param and return resort list accordingly
  // const country = req.query.country;
  // const filteredResort = RESORT_LIST.filter(
  // 	(resort) => resort.country_slug === country
  // );
  // await delay(2000);
  // console.log("tes");
  const country = req.query.country as string;
  const resort = await prisma.resort.findMany({
    where: {
      countrySlug: country,
    },
  });
  res.status(200).json(resort);
}
