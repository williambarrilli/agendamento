// import { bannersByUrl } from "./banners-by-url";
import styles from "./styles.module.scss";

import julianaBannerImage from "../../assets/images/juliana-banner-image.jpg";
interface banners {
  [key: string]: string;
}

export const bannersByUrl: banners = {
  "juliana-silva": julianaBannerImage,
  default: julianaBannerImage,
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
          src={bannersByUrl[bannerImage]}
          alt="bannerImage"
        />
      </div>
    );
  return <></>;
}
