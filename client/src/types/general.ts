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
