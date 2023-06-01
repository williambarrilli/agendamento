import Button from "../../../components/button";
import { sendMessage } from "../../../utils/send-message-whats-app";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function ButtonsView() {
  const navigate = useNavigate();
  const message =
    "Olá, tenho interesse em saber mais sobre os serviços oferecidos!";
  return (
    <div className="container-buttons">
      <div>
        <div className="divider"></div>
        <div className="content-buttons">
          <Button
            text="Agendar"
            size="lg"
            onclick={() => navigate("/agenda")}
          />
        </div>
        <div className="content-buttons">
          <Button
            size="lg"
            text="Reservas"
            onclick={() => console.log("reservas")}
          />
        </div>
        <div className="content-buttons">
          <Button
            size="lg"
            text="Contato"
            onclick={() => sendMessage(message, "5554981559983")}
          />
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}
