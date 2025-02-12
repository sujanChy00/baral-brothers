import { AboutResponse } from "@/types/about";
import { EngineeringPageResponse } from "@/types/engeeing";
import { GeneralData } from "@/types/general";
import { FooterResponse, HeaderResponse } from "@/types/global";
import { GroceryResponse } from "@/types/grocery";
import { HomeResponse } from "@/types/home";
import { fetchAPI } from "./fetch-api";
import { BASE_URL } from "./get-url";

export const getHomePage = async () => {
  const path = "/api/home-page?pLevel";
  const url = new URL(path, BASE_URL);

  return (await fetchAPI(url.href)) as HomeResponse;
};

export const getAboutPage = async () => {
  const path = "/api/about-page?pLevel";
  const url = new URL(path, BASE_URL);

  return (await fetchAPI(url.href)) as AboutResponse;
};

export const getGroceryPage = async () => {
  const path = "/api/sasto-sulav-express?pLevel";
  const url = new URL(path, BASE_URL);

  return (await fetchAPI(url.href)) as GroceryResponse;
};

export const getSierraJapanEnterprisesPage = async () => {
  const path = "/api/sierra-japan-enterprise?pLevel";
  const url = new URL(path, BASE_URL);

  return (await fetchAPI(url.href)) as GeneralData;
};

export const getNepaliDiningPage = async () => {
  const path = "/api/nepali-dining?populate=*";
  const url = new URL(path, BASE_URL);

  return (await fetchAPI(url.href)) as GeneralData;
};

export const getBaralEngineeringPage = async () => {
  const path = "/api/engineering-page?pLevel";
  const url = new URL(path, BASE_URL);

  return (await fetchAPI(url.href)) as EngineeringPageResponse;
};

export const getHeader = async () => {
  const path = "/api/header?pLevel";
  const url = new URL(path, BASE_URL);

  return (await fetchAPI(url.href)) as HeaderResponse;
};

export const getFooter = async () => {
  const path = "/api/footer?pLevel";
  const url = new URL(path, BASE_URL);

  return (await fetchAPI(url.href)) as FooterResponse;
};
