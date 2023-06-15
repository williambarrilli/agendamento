import Button from "../../../components/button";
import { Shop } from "../../../types/shop";
import { sendMessage } from "../../../utils/send-message-whats-app";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import instagram from "../../../assets/icons/instagram.svg";

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
    <div className="container-buttons">
      <div>
        <div className="divider"></div>
        <div className="content-buttons">
          <Button
            text="Agendar"
            size="lg"
            onclick={() => navigate("/agendar")}
          />
        </div>
        {/* <div className="content-buttons">
          <Button
            size="lg"
            text="Reservas"
            onclick={() => console.log("reservas")}
          />
        </div> */}
        <div className="content-buttons">
          <Button
            size="lg"
            text="Contato"
            onclick={() => sendMessage(message, shop.phone)}
          />
        </div>
        <div className="divider"></div>
        <div className="content-icons">
          <img
            className="iconInstagram"
            onClick={redirectToInstagram}
            src={instagram}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
}
