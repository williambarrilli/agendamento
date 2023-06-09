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
    if (!reservedList.length) {
      return horarios.map((item) => {
        return { hour: item, hasReservation: false };
      });
    }

    return horarios.map((hour) => {
      const hasReservation = !!reservedList?.filter(
        (reserva) => reserva.hour === hour
      ).length;
      return { hour, hasReservation };
    });
  }, [reservedList, horarios]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {listHours.map((horario, index) => (
          <button
            className={`${objStr({
              [styles["itemHour"]]: true,
              [styles["itemHour-reserved"]]: !!horario.hasReservation,
            })}`}
            disabled={horario.hasReservation}
            key={index}
            onClick={() => setHourSelected(horario.hour)}
          >
            {horario.hour}
          </button>
        ))}
      </div>
    </div>
  );
}
