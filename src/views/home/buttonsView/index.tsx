import Button from "../../../components/button";
import { Shop } from "../../../types/shop";
import { sendMessage } from "../../../utils/send-message-whats-app";
import { useNavigate } from "react-router-dom";
import instagram from "../../../assets/icons/instagram.svg";
import styles from "./styles.module.scss";

export default function ButtonsView({ shop }: { shop: Shop }) {
  const navigate = useNavigate();
  const message =
    "Olá, tenho interesse em saber mais sobre os serviços oferecidos!";

  const redirectToInstagram = () => {
    // Substitua "nome_do_perfil" pelo nome de usuário do perfil do Instagram
    const instagramURL = `https://www.instagram.com/${shop.instagram}`;
    window.open(instagramURL, "_blank");
  };

  return (
    <div className={styles["container-buttons"]}>
      <div>
        <div className={styles.divider} />
        <div className={styles["content-buttons"]}>
          <Button
            text="Agendar"
            size="lg"
            onclick={() => navigate("/agendar")}
          />
        </div>

        <div className={styles["container-buttons"]}>
          <Button
            size="lg"
            text="Contato"
            onclick={() => sendMessage(message, shop.phone)}
          />
        </div>
        <div className={styles.divider} />
        <div className={styles["content-icons"]}>
          <img
            className={styles["iconInstagram"]}
            onClick={redirectToInstagram}
            src={instagram}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
}
