import Button from "../../components/button";
import { EnumMenu } from "../../types/enums";
import { sendMessage } from "../../utils/send-message-whats-app";
import "./styles.css";

export interface ButtonViewProps {
  onClick: (value: EnumMenu) => void;
}

export default function ButtonsView({ onClick }: ButtonViewProps) {
  const message =
    "Olá, tenho interesse em saber mais sobre os serviços oferecidos!";
  return (
    <div className="container-buttons">
      <div>
        <div className="divider"></div>
        <div className="content-buttons">
          <Button text="Agenda" onclick={() => onClick(EnumMenu.SELECTDATE)} />
        </div>
        <div className="content-buttons">
          <Button
            text="Reservas"
            onclick={() => onClick(EnumMenu.MYSERVICES)}
          />
        </div>
        <div className="content-buttons">
          <Button
            text="Entre em contato"
            onclick={() => sendMessage(message)}
          />
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}
