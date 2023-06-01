import styles from "./styles.module.scss";

interface BannerComponentProps {
  bannerImage: any;
}

export default function BannerComponent({ bannerImage }: BannerComponentProps) {
  return (
    <div>
      <img className={styles.banner} src={bannerImage} alt="bannerImage" />
    </div>
  );
}
