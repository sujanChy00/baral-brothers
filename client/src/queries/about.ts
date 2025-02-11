import { fetchAPI } from "@/lib/fetch-api";
import { BASE_URL } from "@/lib/get-url";
import { AboutResponse } from "@/types/about";

export const getAboutPage = async () => {
  const path = "/api/about-page?populate=*";
  const url = new URL(path, BASE_URL);

  return (await fetchAPI(url.href)) as AboutResponse;
};
