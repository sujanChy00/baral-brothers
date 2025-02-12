import { GeneralResponse, ImageResponse } from "./general";

export type HomeResponse = {
  data: GeneralResponse & {
    banners: HomeBannersResponse[];
    content: HomeContentResponse[];
  };
};

export type HomeBannersResponse = {
  id: number;
  url: string;
  caption: string;
  image: ImageResponse;
};

export type HomeContentResponse = {
  id: number;
  title: string;
  url: string;
  button_text: string;
  desc: string;
  image: ImageResponse;
};
