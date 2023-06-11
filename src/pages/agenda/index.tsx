import styles from "./styles.module.scss";
import { useEffect, useMemo, useState } from "react";
import CalendarView from "../../views/home/calendarView";
import { EnumMenu, EnumStatus } from "../../types/enums";
import Button from "../../components/button";
import ModalComponent from "../../components/modal";
import { sendSolicitationReserved } from "../../controllers/firestore";
import RegisterView from "../../views/home/registerView";
import SelectHourView from "../../views/home/selectHourView";
import { useNavigate } from "react-router-dom";
import BannerComponent from "../../components/banner";
import { Shop } from "../../types/shop";
import { getSessionStorage } from "../../utils/sessionStorage";
import { Reserved } from "../../types/reserved";
import moment, { Moment } from "moment";

export default function Agenda() {
  const navigate = useNavigate();

  const [typeBody, setTypeBody] = useState<EnumMenu>(EnumMenu.SELECTREGISTER);
  const [dateSelected, setDateSelected] = useState<string>("");
  const [hourSelected, setHourSelected] = useState<string>("");
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const shop: Shop = getSessionStorage("shopData");

  useEffect(() => {
    if (!shop?.url) {
      navigate("/");
    }
  }, [navigate, shop]);
  const listReserveDate: Reserved[] = useMemo(
    () =>
      shop?.reservedList.filter(
        (rerseve: Reserved) => rerseve?.date === dateSelected
      ) || [],
    [dateSelected, shop?.reservedList]
  );

  const handleScreen = (screen: EnumMenu) => {
    setTypeBody(screen);
  };

  const renderBody = () => {
    const types = {
      SELECTDATE: (
        <CalendarView
          setDateSelected={(value: Moment) => {
            setDateSelected(value.format("DD/MM/YYYY"));
            handleScreen(EnumMenu.SELECTHOUR);
          }}
          url={shop.url}
          dateSelected={moment(dateSelected)}
        />
      ),
      SELECTHOUR: (
        <SelectHourView
          setHourSelected={(value: string) => {
            setHourSelected(value);
            setModalConfirm(true);
          }}
          dateSelected={dateSelected}
          onBack={(value: EnumMenu) => handleScreen(value)}
          listReserveDate={listReserveDate}
        />
      ),
      SELECTREGISTER: (
        <RegisterView
          name={name}
          phone={phone}
          alterarName={(value) => setName(value)}
          alterarPhone={(value) => setPhone(value)}
          onConfirm={(value) => handleScreen(value)}
        />
      ),
      MYSERVICES: <></>,
    };
    return types[typeBody] || types[EnumMenu.SELECTREGISTER];
  };

  const onConfirm = () => {
    sendSolicitationReserved(shop.id ? shop.id : "MLJ0k39Q9ELsH78X3lHW", {
      name: name,
      phone: phone,
      date: dateSelected,
      hour: hourSelected,
      status: EnumStatus.PENDENT,
    });
    setDateSelected("");
    setHourSelected("");
    setName("");
    setPhone("");

    alert("Solicitação de reserva enviada");
    navigate("/" + shop.url);
  };
  return (
    <div className={styles.container}>
      <BannerComponent bannerImage={shop.url} />
      {renderBody()}
      <ModalComponent
        isOpen={modalConfirm}
        onClose={() => setModalConfirm(false)}
      >
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
    </div>
  );
}
