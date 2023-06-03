import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import "react-calendar/dist/Calendar.css";
import { getSolicitationList } from "../../controllers/firestore";
import { Reserved } from "../../types/reserved";
import moment, { Moment } from "moment";
import Calendar from "../../components/calendar";
import ModalComponent from "../../components/modal";
import ListComponents from "../../components/listComponents";
import { EnumStatus } from "../../types/enums";

export default function MyArea() {
  const [list, setList] = useState<Reserved[]>([]);
  const [filterList, setFilterList] = useState<Reserved[]>([]);

  const [dateSelected, setDateSelected] = useState<Moment | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const renderTableBody = () => {
    return horarios.map((horario, index) => {
      const filterHour = filterList.find(
        (reserved: Reserved) => reserved.hour === horario
      );
      return (
        <tr>
          <td>{horario}</td>
          <td>{filterHour?.name ? filterHour.name : "livre"}</td>
          <td>{filterHour?.phone ? filterHour.phone : ""}</td>
        </tr>
      );
    });
  };

  const horarios = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const fetchData = async () => {
    try {
      const solicitationList = await getSolicitationList(
        "MLJ0k39Q9ELsH78X3lHW"
      );
      setList(solicitationList);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (list.length)
      setFilterList(
        list.filter((reserved) =>
          dateSelected?.isSame(moment(reserved.date, "DD/MM/YYYY"))
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateSelected, list]);

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
            listReserved={list}
          />
        </div>
        <h3 className={styles.text}>Solicitações de reservas</h3>

        <ListComponents
          listItems={list.filter(
            (reserved) => reserved.status === EnumStatus.PENDENT
          )}
        />
      </div>
      <ModalComponent
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        {/* <h1> Horarios do dia: {dateSelected?.format("DD/MM/YYYY")} </h1> */}
        <table>
          <thead>
            <th>Horário</th>
            <th>Nome</th>
            <th>Contato</th>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </ModalComponent>
    </div>
  );
}
