import styles from "./styles.module.scss";
import { useState } from "react";
import CalendarView from "../../views/home/calendarView";
import { EnumMenu, EnumStatus } from "../../types/enums";
import Button from "../../components/button";
import ModalComponent from "../../components/modal";
import { sendSolicitationReserved } from "../../controllers/firestore";
import RegisterView from "../../views/home/registerView";
import SelectHourView from "../../views/home/selectHourView";
import { useNavigate } from "react-router-dom";

export default function Agenda() {
  const navigate = useNavigate();

  const [typeBody, setTypeBody] = useState<EnumMenu>(EnumMenu.SELECTDATE);
  const [dateSelected, setDateSelected] = useState<string>("");
  const [hourSelected, setHourSelected] = useState<string>("");
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const renderBody = () => {
    const types = {
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
      SELECTREGISTER: (
        <RegisterView
          name={name}
          phone={phone}
          alterarName={(value) => setName(value)}
          alterarPhone={(value) => setPhone(value)}
          onConfirm={(value) => setTypeBody(value)}
        />
      ),
      MYSERVICES: <></>,
    };
    return types[typeBody] || types[EnumMenu.SELECTDATE];
  };

  const onConfirm = () => {
    sendSolicitationReserved("MLJ0k39Q9ELsH78X3lHW", {
      name: name,
      phone: phone,
      date: dateSelected,
      hour: hourSelected,
      status: EnumStatus.PENDENT,
    });
    setModalConfirm(false);
    setDateSelected("");
    setHourSelected("");
    setName("");
    setPhone("");

    alert("Solicitação de reserva enviada");
    navigate("/agenda");
  };
  return (
    <div className={styles.container}>
      <CalendarView
        setDateSelected={(value: string) => {
          setDateSelected(value);
          setTypeBody(EnumMenu.SELECTHOUR);
        }}
        dateSelected={dateSelected}
        onBack={(value: EnumMenu) => setTypeBody(value)}
      />
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
