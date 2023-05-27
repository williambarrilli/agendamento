import styles from "./styles.module.scss";
import objStr from "obj-str";

interface ListComponentsProps {
  dateSelected: string;
}

export default function ListComponents({ dateSelected }: ListComponentsProps) {
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
          onClick={() =>
            alert(
              `seu horario dia ${dateSelected} as ${horario.hour} foi reservado!`
            )
          }
        >
          {horario.hour}
        </button>
      ))}
    </div>
  );
}
