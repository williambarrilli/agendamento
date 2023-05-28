import styles from "./styles.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../../../components/button";
import { EnumMenu } from "../../../types/enums";

export interface CalendarViewProps {
  setDateSelected: (value: string) => void;
  dateSelected: string;
  onBack: (value: EnumMenu) => void;
}

export default function CalendarView({
  setDateSelected,
  dateSelected,
  onBack,
}: CalendarViewProps) {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h4 className={styles.text}>Escolha uma data:</h4>
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
            onclick={() => onBack(EnumMenu.INITIAL)}
            text={"Voltar"}
          />
        </div>
      </div>
    </div>
  );
}
