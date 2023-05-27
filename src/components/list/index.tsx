import styles from "./styles.module.scss";
import objStr from "obj-str";

interface ListComponentsProps {
  setHourSelected: (value: string) => void;
}

export default function ListComponents({
  setHourSelected,
}: ListComponentsProps) {
  // TODO: Componente de listagem recebe a lista como parametro
  const horarios = [
    { hour: "08:00", reserved: true },
    { hour: "09:00", reserved: false },
    { hour: "10:00", reserved: false },
    { hour: "11:00", reserved: false },
    { hour: "14:00", reserved: true },
    { hour: "15:00", reserved: false },
    { hour: "16:00", reserved: false },
    { hour: "17:00", reserved: true },
  ];

  return (
    <div className={styles.container}>
      {horarios.map((horario, index) => (
        <button
          className={`${objStr({
            [styles["itemHour"]]: true,
            [styles["itemHour-reserved"]]: horario.reserved,
          })}`}
          disabled={horario.reserved}
          key={index}
          onClick={() => setHourSelected(horario.hour)}
        >
          {horario.hour}
        </button>
      ))}
    </div>
  );
}
