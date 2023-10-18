import Default from "./default.jpg";
import WillBanner from "./will.jpg";
import AnaUnhasBanner from "./ana-unhas.jpg";
import KarolGuedesBanner from "./karolguedes.jpg";

interface banners {
  [key: string]: string;
}

export const bannersByUrl: banners = {
  "juliana-silva": Default,
  will: WillBanner,
  "ana-unhas": AnaUnhasBanner,
  herick: WillBanner,
  karolguedes: KarolGuedesBanner,
  default: Default,
};
