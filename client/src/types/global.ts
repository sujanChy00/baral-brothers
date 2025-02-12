import { GeneralResponse } from "./general";

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
