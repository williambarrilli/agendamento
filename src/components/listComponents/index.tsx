import { sendMessage } from "../../utils/send-message-whats-app";
import Button from "../button";
import styles from "./styles.module.scss";

interface ListComponentsProps {
  listItems: any[];
}

export default function ListComponents({ listItems }: ListComponentsProps) {
  const onConfirm = (item: any) => {
    const messageConfirm = `Olá, sua solicitação de agendamento foi confirmada, te aguardo no dia ${item.date} as ${item.hour} horas.`;
    sendMessage(messageConfirm, item.phone);
  };
  const onReject = (item: any) => {
    const messageReject = `Olá, não estarei disponivel neste horario, podemos agendar um outro horario?`;
    sendMessage(messageReject, item.phone);
  };

  return (
    <div className={styles.container}>
      {listItems.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.row}>
            <div className={styles.text}>Nome: </div> {item.name}
            <div className={styles.text}>{"Data: "} </div>
            {item.date}
            <div className={styles.text}>{"Hora: "} </div>
            {item.hour}
          </div>
          <div className={styles.row}>
            <Button text="Confirmar" onclick={() => onConfirm(item)} />
            <Button text="Rejeitar" onclick={() => onReject(item)} />
          </div>
          <div className="bold"></div>
        </div>
      ))}
    </div>
  );
}
