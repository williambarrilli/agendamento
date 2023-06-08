// import { bannersByUrl } from "./banners-by-url";
import styles from "./styles.module.scss";

import JulianaBannerImage from "../../assets/images/juliana-banner-image.jpg";
import WillBanner from "../../assets/images/will-banner-image.jpg";
import AnaUnhasBanner from "../../assets/images/ana-unhas-banner-image.jpg";

interface banners {
  [key: string]: string;
}

export const bannersByUrl: banners = {
  "juliana-silva": JulianaBannerImage,
  will: WillBanner,
  "ana-unhas": AnaUnhasBanner,
  default: JulianaBannerImage,
};

interface BannerComponentProps {
  bannerImage: string | undefined;
}

export default function BannerComponent({ bannerImage }: BannerComponentProps) {
  if (bannerImage)
    return (
      <div>
        <img
          className={styles.banner}
          src={bannersByUrl[bannerImage] || bannersByUrl.default}
          alt="bannerImage"
        />
      </div>
    );
  return <></>;
}
