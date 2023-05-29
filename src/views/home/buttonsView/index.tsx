import Button from "../../../components/button";
import { EnumMenu } from "../../../types/enums";
import { sendMessage } from "../../../utils/send-message-whats-app";
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
          <Button
            text="Agenda"
            size="lg"
            onclick={() => onClick(EnumMenu.SELECTREGISTER)}
          />
        </div>
        <div className="content-buttons">
          <Button
            size="lg"
            text="Reservas"
            onclick={() => onClick(EnumMenu.MYSERVICES)}
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
