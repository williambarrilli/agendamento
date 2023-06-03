import { useState, useEffect, useCallback } from "react";
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

  const filterlistDate = useCallback(
    (dateSelected: string | undefined) => {
      if (dateSelected)
        return list.filter((reserved) => dateSelected === reserved.date);
      return [];
    },
    [list]
  );

  useEffect(() => {
    setFilterList(filterlistDate(dateSelected?.format("DD/MM/YYYY")));
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
          <Calendar onSelectDate={(value: Moment) => setDateSelected(value)} />
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
        <div>
          <h1 className={styles.text}>
            Horários do dia: {dateSelected?.format("DD/MM/YYYY")}
          </h1>
          <div className={styles.grid}>
            {filterList.length ? (
              filterList.map((reserved, index) => (
                <div key={index} className={styles.horarioContainer}>
                  <p className={styles.textHorarios}>
                    Horário: {reserved.hour}
                  </p>

                  <p className={styles.green}>{reserved.name}</p>
                </div>
              ))
            ) : (
              <p className={styles.textHorarios}>
                Sem horarios agendados para esta data
              </p>
            )}
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}
