import { GeneralResponse, ImageResponse, LinksType } from "./general";

export type GroceryResponse = {
  data: GeneralResponse & {
    shop_name: string;
    title_on_hover: string;
    shop_description: string;
    shop_type: string;
    about_shop: string;
    shop_card_desc: string;
    banner: ImageResponse;
    shop_url: string;
    shop_location?: string;
    links: LinksType[];
    items: FeaturedItems;
  };
};

export type FeaturedItems = {
  id: number;
  title: string;
  url: string;
  items: ItemsResponse[];
  button_text: string;
};

export type ItemsResponse = {
  id: number;
  title: string;
  desc: string;
  url: string;
  image: ImageResponse;
};
