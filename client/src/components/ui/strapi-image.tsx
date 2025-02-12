import { getStrapiURL } from "@/lib/get-url";
import Image, { ImageProps } from "next/image";

type StrapiImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
};

export function StrapiImage({
  src,
  alt,
  className,
  ...rest
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return <Image src={imageUrl} alt={alt} className={className} {...rest} />;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return getStrapiURL() + url;
}
