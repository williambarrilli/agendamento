import Button from "../../components/button";
import { EnumMenu } from "../../types/enums";
import "./styles.css";

export interface ButtonViewProps {
  onClick: (value: EnumMenu) => void;
}

export default function ButtonsView({ onClick }: ButtonViewProps) {
  return (
    <div className="container-buttons">
      <div>
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
          <Button text="Entre em contato" onclick={() => alert("chama zap")} />
        </div>
      </div>
    </div>
  );
}
