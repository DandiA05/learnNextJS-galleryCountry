import prisma from "@/lib/prisma";

export const getContriesFromDb = async () => {
  const countries = await prisma.country.findMany();
  return countries;
};
