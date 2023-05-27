import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import bannerImage from "../../assets/bannerImage.jpg";
import CalendarView from "../../views/calendarView";
import SelectHourView from "../../views/selectHourView";
import ButtonsView from "../../views/buttonsView";
import { EnumMenu } from "../../types/enums";
import ModalComponent from "../../components/modal";
import Button from "../../components/button";
import { sendMessage } from "../../utils/send-message-whats-app";

export default function Home() {
  const [typeBody, setTypeBody] = useState<EnumMenu>(EnumMenu.INITIAL);
  const [dateSelected, setDateSelected] = useState<string>("");
  const [hourSelected, setHourSelected] = useState<string>("");
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);

  const renderBody = () => {
    const types = {
      INITIAL: (
        <ButtonsView onClick={(value: EnumMenu) => setTypeBody(value)} />
      ),
      SELECTSERVICE: <></>,
      SELECTDATE: (
        <CalendarView
          setDateSelected={(value: string) => {
            setDateSelected(value);
            setTypeBody(EnumMenu.SELECTHOUR);
          }}
          dateSelected={dateSelected}
          onBack={(value: EnumMenu) => setTypeBody(value)}
        />
      ),
      SELECTHOUR: (
        <SelectHourView
          setHourSelected={(value: string) => {
            setHourSelected(value);
            setModalConfirm(true);
          }}
          dateSelected={dateSelected}
          onBack={(value: EnumMenu) => setTypeBody(value)}
        />
      ),
      MYSERVICES: <></>,
    };
    return types[typeBody] || types[EnumMenu.INITIAL];
  };

  const onSend = () => {
    sendMessage(
      `Olá estou entrando em contato para agendar um serviço no dia ${dateSelected} as ${hourSelected} poderia confirmar disponibilidade?`
    );
    setModalConfirm(false);
    setDateSelected("");
    setHourSelected("");
  };

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.banner} src={bannerImage} alt="bannerImage" />
      </div>
      <div>
        <h1 className={styles.text}> Juliana Silva </h1>
      </div>
      {renderBody()}
      {modalConfirm && (
        <ModalComponent isOpen={modalConfirm}>
          <div className={styles["modal-content"]}>
            <h4>Confirme seu agendamento</h4>
            <h5>
              Data: {dateSelected} as {hourSelected}
            </h5>
            <div className={styles["footer-buttons-modal"]}>
              <div className={styles["footer-button-box"]}>
                <Button
                  onclick={() => setModalConfirm(false)}
                  text={"Voltar"}
                />
              </div>
              <div className={styles["footer-button-box"]}>
                <Button onclick={() => onSend()} text={"Confirmar"} />
              </div>
            </div>
          </div>
        </ModalComponent>
      )}
    </div>
  );
}
