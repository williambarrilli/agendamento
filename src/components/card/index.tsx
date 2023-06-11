import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import BannerComponent from "../banner";
import Button from "../button";

export interface CardComponentProps {
  image: string;
  title: string;
  url: string;
  subtitle?: string;
}

export default function CardComponent({
  image,
  title,
  url,
  subtitle = "Agende seu horario",
}: CardComponentProps) {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.card}>
        <BannerComponent bannerImage={image} />
        <h5 className={styles.cardsTitle}>{title}</h5>
        <p className={styles.cardsSubtitle}>{subtitle}</p>
        <Button size="md" text="Visite" onclick={() => navigate(url)} />
      </div>
    </div>
  );
}
