import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import ReservedComponent from "../../components/addFormReserved";
import Button from "../../components/button";
import Calendar from "../../components/calendar";
import ListComponents from "../../components/listComponents";
import ModalComponent from "../../components/modal";
import { Reserved } from "../../types/reserved";
import { Shop } from "../../types/shop";
import { getSessionStorage } from "../../utils/sessionStorage";
import styles from "./styles.module.scss";
import { sendMessage } from "utils/send-message-whats-app";
import { useNavigate } from "react-router-dom";
import { logPageAnalytics } from "utils/analitycs";
import { EnumStatus } from "types/enums";

export default function MyArea() {
  const navigate = useNavigate();

  useEffect(() => {
    logPageAnalytics("My Area");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [shop, setShop] = useState<Shop>();
  const [filterList, setFilterList] = useState<Reserved[]>([]);

  const [dateSelected, setDateSelected] = useState<Moment | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalNewReserved, setIsOpenModalNewReserved] =
    useState<boolean>(false);

  useEffect(() => {
    if (shop?.reservedList?.length)
      setFilterList(
        shop?.reservedList?.filter((reserved) =>
          dateSelected?.isSame(moment(reserved.date, "DD/MM/YYYY"))
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateSelected, shop]);

  useEffect(() => {
    if (window.location) setShop(getSessionStorage("shopData"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dateSelected) return setIsOpenModal(true);
    return setIsOpenModal(false);
  }, [dateSelected]);

  const renderTableBody = () => {
    return shop?.hoursShopOpen?.map((horario, index) => {
      console.log(shop?.hoursShopOpen, filterList);
      const filterHour = filterList.find(
        (reserved: Reserved) => reserved.hour === horario
      );
      return (
        <tr key={index}>
          <td>{horario}</td>
          <td>{filterHour?.name ? filterHour.name : "livre"}</td>
          <td>
            {filterHour?.phone && (
              <div className={styles.rowBotton}>
                <Button
                  styleOption="secondary"
                  size="sm"
                  text="Contato"
                  onClick={() =>
                    sendMessage("Olá tudo bem?", filterHour?.phone)
                  }
                />
              </div>
            )}
          </td>
        </tr>
      );
    });
  };
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.text}>Minha Agenda</h1>
        <h3 className={styles.text}>Selecione o dia que deseja visualizar</h3>

        <div className={styles.content}>
          <Calendar
            onSelectDate={(value: Moment) => setDateSelected(value)}
            listReserved={shop?.reservedList}
            setDateSelected={setDateSelected}
            dateSelected={dateSelected}
          />
        </div>
        <section className={styles["box-button"]}>
          <div className={styles.button}>
            <Button
              styleOption="primary"
              size="md"
              onClick={() => setIsOpenModalNewReserved(true)}
              text={"Adicionar Reserva"}
            />
          </div>
          <div className={styles.button}>
            <Button
              styleOption="primary"
              size="md"
              onClick={() => navigate("/minha-area/meus-horarios")}
              text={"Meus Horarios"}
            />
          </div>
        </section>
        <h3 className={styles.text}>Solicitações de reservas</h3>
        {shop?.id && (
          <ListComponents
            shopId={shop.id}
            listItems={shop?.solicitationList?.filter(
              (reserved) => reserved.status === EnumStatus.PENDENT
            )}
          />
        )}
      </div>
      <ModalComponent
        isOpen={isOpenModalNewReserved}
        onClose={() => setIsOpenModalNewReserved(false)}
      >
        <ReservedComponent
          shop={shop}
          onClose={() => setIsOpenModalNewReserved(false)}
        />
      </ModalComponent>
      <ModalComponent
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <>
          <h1 className={styles.text}>
            Horarios do dia: {dateSelected?.format("DD/MM/YYYY")}
          </h1>
          <table className={styles.table}>
            <thead className={styles.textTread}>
              <th>Horário</th>
              <th className={styles.columMax}>Nome</th>
              <th>Contato</th>
            </thead>
            {/* <tbody>
              <td className={styles.separator} />
              <td className={styles.separator} />
              <td className={styles.separator} />
            </tbody> */}
            <tbody className={styles.textTable}>{renderTableBody()}</tbody>
          </table>
        </>
      </ModalComponent>
    </div>
  );
}
