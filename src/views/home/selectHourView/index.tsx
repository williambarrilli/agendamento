import { useState, useEffect } from "react";
import Button from "../../../components/button";
import ListComponents from "../../../components/list";
import { getReservedHours } from "../../../controllers/firestore";
import { EnumMenu } from "../../../types/enums";
import styles from "./styles.module.scss";
import { Reserved } from "../../../types/reserved";

interface SelectHourViewProps {
  setHourSelected: (value: string) => void;
  dateSelected: string;
  onBack: (value: EnumMenu) => void;
}

export default function SelectHourView({
  setHourSelected,
  dateSelected,
  onBack,
}: SelectHourViewProps) {
  const [listReserveDate, setListReserveDate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservedList = await getReservedHours("MLJ0k39Q9ELsH78X3lHW");
        if (!reservedList) return;
        const reservedDate = reservedList.filter(
          (rerseve: Reserved) => rerseve?.date === dateSelected
        );
        setListReserveDate(reservedDate);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dateSelected]);

  // TODO: estilizar textos
  return (
    <>
      <div className={styles.container}>Data selecionada: {dateSelected}</div>
      <div className={styles.container}>Horarios disponiveis:</div>
      {!!listReserveDate?.length && (
        <>
          <ListComponents
            reservedList={listReserveDate}
            setHourSelected={(value) => setHourSelected(value)}
          />
          <div className={styles.container}>Selecione o horario!</div>
        </>
      )}

      <Button
        size="md"
        styleOption="secondary"
        onclick={() => onBack(EnumMenu.SELECTDATE)}
        text={"Voltar"}
      />
      <div className={styles.contentButton}></div>
    </>
  );
}
