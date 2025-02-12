import { GeneralResponse, ImageResponse, LinksType } from "./general";

export type AboutResponse = {
  data: AboutData;
};

type AboutData = GeneralResponse & {
  id: number;
  title: string;
  banner: ImageResponse;
  faq: AboutFaq[];
  links: LinksType[];
};

type AboutFaq = {
  id: number;
  question: string;
  answer: string;
};
