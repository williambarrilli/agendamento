import { useMemo } from "react";
import { Reserved } from "../../types/reserved";
import styles from "./styles.module.scss";
import objStr from "obj-str";

interface ListComponentsProps {
  setHourSelected: (value: string) => void;
  reservedList: Reserved[];
}

export default function ListComponents({
  setHourSelected,
  reservedList,
}: ListComponentsProps) {
  // TODO: Componente de listagem recebe a lista como parametro

  const horarios = useMemo(
    () => [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ],
    []
  );

  const listHours = useMemo(() => {
    console.log(reservedList);

    if (!horarios.length || !reservedList.length) return [];
    return horarios.map((hour) => {
      const hasReservation = reservedList?.some(
        (reserva) => reserva.hour === hour
      );
      return { hour, hasReservation };
    });
  }, [reservedList, horarios]);
  return (
    <div className={styles.container}>
      {listHours.map((horario, index) => (
        <button
          className={`${objStr({
            [styles["itemHour"]]: true,
            [styles["itemHour-reserved"]]: horario,
          })}`}
          disabled={horario.hasReservation}
          key={index}
          onClick={() => setHourSelected(horario.hour)}
        >
          {horario.hour}
        </button>
      ))}
    </div>
  );
}
