import styles from "./styles.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../../components/button";
import { EnumMenu } from "../../types/enums";

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
      <header>
        <h4>Escolha uma data</h4>
      </header>
      <div className="content">
        <Calendar
          onClickDay={(value) => setDateSelected(value?.toLocaleDateString())}
          value={dateSelected}
          minDate={new Date()}
        />
      </div>
      <Button onclick={() => onBack(EnumMenu.INITIAL)} text={"Voltar"} />
    </div>
  );
}
