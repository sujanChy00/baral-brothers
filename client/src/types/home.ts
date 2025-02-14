import { GeneralResponse, ImageResponse } from "./general";
import { SeoResponse } from "./global";

export type HomeResponse = {
  data: GeneralResponse & {
    banners?: HomeBannersResponse[];
    content?: HomeContentResponse[];
    seo?: SeoResponse;
    trending_topics?: FeatureTopics;
  };
};

export type HomeBannersResponse = {
  id: number;
  url?: string;
  caption?: string;
  image?: ImageResponse;
};

export type HomeContentResponse = {
  id: number;
  title?: string;
  url?: string;
  button_text?: string;
  desc?: string;
  image?: ImageResponse;
};

export type Topics = {
  id: number;
  title: string;
  url: string;
  icon: ImageResponse;
};

export type FeatureTopics = {
  id: number;
  title: string;
  topics?: Topics[];
};
