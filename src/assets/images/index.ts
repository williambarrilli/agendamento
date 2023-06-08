import JulianaBannerImage from "./juliana-banner-image.jpg";
import WillBanner from "./will-banner-image.jpg";
import AnaUnhasBanner from "./ana-unhas-banner-image.jpg";
interface banners {
  [key: string]: string;
}

export const bannersByUrl: banners = {
  "juliana-silva": JulianaBannerImage,
  will: WillBanner,
  "ana-unhas": AnaUnhasBanner,
  default: JulianaBannerImage,
};
