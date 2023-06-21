// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const countries = await prisma.country.findMany();

  res.setHeader(
    "Cache-Control",
    "s-maxage=86400, stale-while-revalidate=604800"
  );

  res.send(`<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                    <loc>https://the-best-resort.vercel.app/</loc>
                    <priority>0.8</priority>
                </url>
                <url>
                    <loc>https://the-best-resort.vercel.app/list</loc>
                    <priority>0.8</priority>
                </url>
                    ${countries.map(
                      (country) =>
                        `
                        <url>
                            <loc>https://the-best-resort.vercel.app/country/${country.slug}/</loc>
                            <priority>0.8</priority>

                        </url>
                        `
                    )}
                </urlset>`);
}
