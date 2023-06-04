import julianaBannerImage from "../../assets/images/juliana-banner-image.jpg";
interface banners {
  [key: string]: string;
}

export const bannersByUrl: banners = {
  "juliana-silva": julianaBannerImage,
  default: julianaBannerImage,
};
