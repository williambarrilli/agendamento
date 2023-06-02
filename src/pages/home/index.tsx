import styles from "./styles.module.scss";
import bannerImage from "../../assets/bannerImage.jpg";

import ButtonsView from "../../views/home/buttonsView";
import BannerComponent from "../../components/banner";
import moment from "moment";
moment.locale("pt-br");

export default function Home() {
  return (
    <div className={styles.container}>
      <BannerComponent bannerImage={bannerImage} />
      <div>
        <h1 className={styles.text}> Juliana Silva </h1>
      </div>
      <ButtonsView />
    </div>
  );
}
