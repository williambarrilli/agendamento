import { updateSolicitationReserve } from "../../controllers/firestore";
import { EnumStatus, EnumStatusKeys } from "../../types/enums";
import { Reserved } from "../../types/reserved";
import { sendMessage } from "../../utils/send-message-whats-app";
import Button from "../button";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

interface ListComponentsProps {
  listItems: Reserved[];
}

export default function ListComponents({ listItems }: ListComponentsProps) {
  const navigate = useNavigate();

  const onConfirm = (item: Reserved, index: number) => {
    item.status = EnumStatus.APROVED;
    updateSolicitationReserve("MLJ0k39Q9ELsH78X3lHW", item, index);
    const messageConfirm = `Olá, sua solicitação de agendamento foi confirmada, te aguardo no dia ${item.date} as ${item.hour} horas.`;
    navigate("/minha-area");
    sendMessage(messageConfirm, item.phone);
  };

  const onReject = (item: Reserved, index: number) => {
    item.status = EnumStatus.REPROVED;
    updateSolicitationReserve("MLJ0k39Q9ELsH78X3lHW", item, index);
    const messageReject = `Olá, não estarei disponivel neste horário, podemos agendar um outro horário?`;
    sendMessage(messageReject, item.phone);
  };
  if (!listItems?.length) {
    return (
      <div className={styles.text}>
        {"Nenhuma solicitação reserva encontrada para esta data"}
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {listItems.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.row}>
            <div className={styles.text}>Nome: </div> {item.name}
            <div className={styles.text}>{"| Data: "} </div>
            {item.date}
            <div className={styles.text}>{"| Hora: "} </div>
            {item.hour}
          </div>
          <div className={styles.row}>
            {item.status !== EnumStatus.PENDENT ? (
              <>{EnumStatusKeys[item.status]}</>
            ) : (
              <>
                <div>
                  <Button
                    styleOption="secondary"
                    size="sm"
                    text="Rejeitar"
                    onclick={() => onReject(item, index)}
                  />
                </div>
                <div className={styles.rowBotton}>
                  <Button
                    styleOption="secondary"
                    size="sm"
                    text="Confirmar"
                    onclick={() => onConfirm(item, index)}
                  />
                </div>
              </>
            )}

            <div className={styles.rowBotton}>
              <Button
                styleOption="secondary"
                size="sm"
                text="Entrar em contato"
                onclick={() => sendMessage("Olá tudo bem?", "5554981559983")}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
