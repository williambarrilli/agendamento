import styles from "./styles.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";

export interface CalendarViewProps {
  setDateSelected: (value: string) => void;
}

export default function CalendarView({ setDateSelected }: CalendarViewProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <div>
          <h4 className={styles.text}>Selecione a data desejada:</h4>
        </div>
        <div className={styles.content}>
          <Calendar
            onClickDay={(value) => setDateSelected(value.toLocaleDateString())}
            value={new Date()}
            minDate={new Date()}
          />
        </div>
        <div className={styles.contentButtons}>
          <Button
            styleOption="secondary"
            size="md"
            onclick={() => navigate("/")}
            text={"Voltar"}
          />
        </div>
      </div>
    </div>
  );
}
