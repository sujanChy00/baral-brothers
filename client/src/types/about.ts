import { GeneralResponse, IconType, ImageFormat } from "./general";

export type AboutResponse = {
  data: AboutData;
};

type AboutData = GeneralResponse & {
  id: number;
  title: string;
  banner: GeneralResponse & {
    name: string;
    alternativeText?: string;
    caption: null;
    width: number;
    height: number;
    formats: ImageFormat;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
  };
  faq: AboutFaq[];
  links: {
    id: number;
    type: IconType;
    url?: string;
  }[];
};

type AboutFaq = {
  id: number;
  question: string;
  answer: string;
};
