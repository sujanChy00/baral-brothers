import { SeoResponse } from "./global";

export type GeneralResponse = {
  id: number;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

export type ImageFormatResponse = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: number;
};

export type ImageFormat = {
  small: ImageFormatResponse;
  medium: ImageFormatResponse;
  large: ImageFormatResponse;
};

export type IconType =
  | "facebook"
  | "twitter"
  | "instagram"
  | "youtube"
  | "linkedIn"
  | "website"
  | "tiktok";

export type ImageResponse = GeneralResponse & {
  name: string;
  alternativeText?: string;
  caption: null;
  width?: number;
  height: number;
  formats: ImageFormat;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url?: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
};

export type LinksType = {
  id: number;
  type: IconType;
  url?: string;
};

export type GeneralData = {
  data: GeneralResponse & {
    id: number;
    title?: string;
    banner?: ImageResponse;
    description?: string;
    content?: string;
    subtitle?: string;
    links?: LinksType[];
    seo?: SeoResponse;
  };
};
