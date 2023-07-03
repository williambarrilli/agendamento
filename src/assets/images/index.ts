import Default from "./default.jpg";
import WillBanner from "./will.jpg";
import AnaUnhasBanner from "./ana-unhas.jpg";
interface banners {
  [key: string]: string;
}

export const bannersByUrl: banners = {
  "juliana-silva": Default,
  will: WillBanner,
  "ana-unhas": AnaUnhasBanner,
  herick: WillBanner,
  default: Default,
};
