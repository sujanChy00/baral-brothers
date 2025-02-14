import { GeneralResponse, ImageResponse } from "./general";

export type HeaderResponse = {
  data: GeneralResponse & {
    logo_text: string;
    links: {
      label: string;
      url: string;
      id: number;
    }[];
  };
};

export type FooterResponse = {
  data: GeneralResponse & {
    text: string;
  };
};

export type SeoResponse = {
  title: string;
  description: string;
  fav_icon: ImageResponse;
  keywords: PageKeywords[];
  open_graph: OpenGraph;
};

export type PageKeywords = {
  page_keyword: string;
  id: number;
};

export type OpenGraph = {
  alt: string;
  image: ImageResponse;
  site_name?: string;
  title: string;
  description: string;
};
