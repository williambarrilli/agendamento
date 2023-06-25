import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import Calendar from "../../components/calendar";
import ListComponents from "../../components/listComponents";
import ModalComponent from "../../components/modal";
import { getShopByUrl } from "../../controllers/firestore";
import { EnumStatus } from "../../types/enums";
import { Reserved } from "../../types/reserved";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { Shop } from "../../types/shop";
import { getSessionStorage } from "../../utils/sessionStorage";
import Button from "../../components/button";
import ReservedComponent from "../../components/addFormReserved";
import { horarios } from "../../utils/constants";

export default function MyArea() {
  const { loja } = useParams();

  const [shop, setShop] = useState<Shop>();
  const [filterList, setFilterList] = useState<Reserved[]>([]);

  const [dateSelected, setDateSelected] = useState<Moment | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalNewReserved, setIsOpenModalNewReserved] =
    useState<boolean>(false);

  const session: Shop = getSessionStorage("shopData");

  const renderTableBody = () => {
    return horarios.map((horario, index) => {
      const filterHour = filterList.find(
        (reserved: Reserved) => reserved.hour === horario
      );
      return (
        <tr key={index}>
          <td>{horario}</td>
          <td>{filterHour?.name ? filterHour.name : "livre"}</td>
          <td>{filterHour?.phone ? filterHour.phone : ""}</td>
        </tr>
      );
    });
  };

  const fetchData = async () => {
    try {
      const shop = await getShopByUrl(loja ? loja : "juliana-silva");

      setShop(shop);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (session?.url && session?.url === loja) {
      setShop(session);
    } else fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (shop?.solicitationList?.length)
      setFilterList(
        shop?.solicitationList?.filter((reserved) =>
          dateSelected?.isSame(moment(reserved.date, "DD/MM/YYYY"))
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateSelected, shop]);

  useEffect(() => {
    if (dateSelected) return setIsOpenModal(true);
    return setIsOpenModal(false);
  }, [dateSelected]);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.text}>Minha Agenda</h1>
        <h3 className={styles.text}>Selecione o dia que deseja visualizar</h3>

        <div className={styles.content}>
          <Calendar
            onSelectDate={(value: Moment) => setDateSelected(value)}
            listReserved={shop?.solicitationList}
            setDateSelected={setDateSelected}
            dateSelected={dateSelected}
          />
        </div>

        <div className={styles.button}>
          <Button
            styleOption="primary"
            size="md"
            onclick={() => setIsOpenModalNewReserved(true)}
            text={"Adicionar Reserva"}
          />
        </div>
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
          shopId={shop?.id}
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

            <tr>
              <td className={styles.separator}></td>
              <td className={styles.separator}></td>
              <td className={styles.separator}></td>
            </tr>

            <tbody className={styles.textTable}>{renderTableBody()}</tbody>
          </table>
        </>
      </ModalComponent>
    </div>
  );
}
