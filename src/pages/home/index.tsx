import styles from "./styles.module.scss";
import bannerImage from "../../assets/bannerImage.jpg";

import ButtonsView from "../../views/home/buttonsView";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.banner} src={bannerImage} alt="bannerImage" />
      </div>
      <div>
        <h1 className={styles.text}> Juliana Silva </h1>
      </div>
      <ButtonsView />
    </div>
  );
}
