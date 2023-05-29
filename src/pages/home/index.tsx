import { useState } from "react";
import styles from "./styles.module.scss";
import bannerImage from "../../assets/bannerImage.jpg";
import CalendarView from "../../views/home/calendarView";
import SelectHourView from "../../views/home/selectHourView";
import ButtonsView from "../../views/home/buttonsView";
import { EnumMenu, EnumStatus } from "../../types/enums";
import ModalComponent from "../../components/modal";
import Button from "../../components/button";
import { sendSolicitationReserved } from "../../controllers/firestore";
import RegisterView from "../../views/home/registerView";
import { string } from "yargs";

export default function Home() {
  const [typeBody, setTypeBody] = useState<EnumMenu>(EnumMenu.INITIAL);
  // TODO: criar form
  const [dateSelected, setDateSelected] = useState<string>("");
  const [hourSelected, setHourSelected] = useState<string>("");
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");

  //----- fluxo Cliente
  // 1. Agendar
  // 2. Nome + telefone
  // 3. Data
  // 4. Hora
  // 5. Confirmacao
  // 6. bloquear horario agenda atendente

  // ----- fluxo atendente
  // 1. Credenciais
  // 2. Visualizar agenda
  // 3. Aprovar ou reprovar e entrar em contato com cliente

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
      SELECTREGISTER: <></>,
      MYSERVICES: <></>,
    };
    return types[typeBody] || types[EnumMenu.INITIAL];
  };

  const onConfirm = () => {
    sendSolicitationReserved("MLJ0k39Q9ELsH78X3lHW", {
      name: "teste",
      phone: "54981559983",
      date: dateSelected,
      hour: hourSelected,
      status: EnumStatus.PENDENT,
    });
    setModalConfirm(false);
    setDateSelected("");
    setHourSelected("");
    alert("ok");
    setTypeBody(EnumMenu.INITIAL);
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
                  styleOption="secondary"
                />
              </div>
              <div className={styles["footer-button-box"]}>
                <Button onclick={() => onConfirm()} text={"Confirmar"} />
              </div>
            </div>
          </div>
        </ModalComponent>
      )}
    </div>
  );
}
