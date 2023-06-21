import prisma from "@/lib/prisma";
import { error } from "console";

export const postCountriesFromDb = async (name: string, url: string) => {
  if (name && url) {
    let body = {
      name: name.toUpperCase(),
      slug: name,
      image_url: url,
    };
    let header = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    fetch("/api/resort/create", {
      method: "POST",
      body: JSON.stringify(body),
      headers: header,
    })
      .then((response) => location.replace("http://localhost:3000/"))
      .catch((error) => console.error(error));
  }
};
