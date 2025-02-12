import { GeneralResponse } from "./general";

export type EngineeringPageResponse = {
  data: GeneralResponse & {
    banner_title: string;
    about_us_title: string;
    about_us: string;
    facilities: {
      id: number;
      title: string;
      our_facilities: EngineeringFacilities[];
    };
    sub_banner: {
      id: string;
      title: string;
      subtitle: string;
      url: string;
      button_text: string;
    };
  };
};

export type EngineeringFacilities = {
  id: number;
  title: string;
  description: string;
};
