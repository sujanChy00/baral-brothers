import { GeneralResponse, ImageResponse, LinksType } from "./general";
import { SeoResponse } from "./global";

export type AboutResponse = {
  data: AboutData;
};

type AboutData = GeneralResponse & {
  id: number;
  title: string;
  banner: ImageResponse;
  faq: AboutFaq[];
  links: LinksType[];
  seo: SeoResponse;
};

type AboutFaq = {
  id: number;
  question: string;
  answer: string;
};
