import { bannersByUrl } from "../../assets/images";
import styles from "./styles.module.scss";

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
