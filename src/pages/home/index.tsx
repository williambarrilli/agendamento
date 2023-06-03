import styles from "./styles.module.scss";
import bannerImage from "../../assets/bannerImage.jpg";
import ButtonsView from "../../views/home/buttonsView";
import BannerComponent from "../../components/banner";

export default function Home() {
  return (
    <>
      <BannerComponent bannerImage={bannerImage} />
      <h1 className={styles.text}> Juliana Silva </h1>
      <ButtonsView />
    </>
  );
}
