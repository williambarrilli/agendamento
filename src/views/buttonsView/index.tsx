import Button from "../../components/button";
import "./styles.css";

export default function ButtonsView() {
  return (
    <div className="container-buttons">
      <div>
        <div className="content-buttons">
          <Button text="Agenda" onclick={() => alert("batata")} />
        </div>
        <div className="content-buttons">
          <Button text="Reservas" onclick={() => alert("batata")} />
        </div>
        <div className="content-buttons">
          <Button text="Entre em contato" onclick={() => alert("batata")} />
        </div>
      </div>
    </div>
  );
}
