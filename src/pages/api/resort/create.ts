// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method != "POST") res.status(405).end();

  const data = req.body;
  console.log(req);
  const resort = await prisma.country.create({
    data: {
      name: data?.name,
      slug: data?.slug,
      image_url: data?.image_url,
    },
  });
  res.status(200).json(resort);
}
