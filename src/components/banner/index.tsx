import { bannersByUrl } from "../../assets/images";
import styles from "./styles.module.scss";

interface BannerComponentProps {
  bannerImage: string;
}

export default function BannerComponent({ bannerImage }: BannerComponentProps) {
  return (
    <div>
      <img
        className={styles.banner}
        src={bannersByUrl[bannerImage] || bannersByUrl.default}
        alt="bannerImage"
      />
    </div>
  );
}
