import { useMemo, useState } from "react";
import moment, { Moment } from "moment";
import MonthCard from "./monthCard";
import arrowRight from "../../assets/arrowRight.svg";

import arrowLeft from "../../assets/arrowLeft.svg";
import styles from "./styles.module.scss";

export interface CalendarProps {
  onSelectDate: () => void;
}

export default function Calendar({ onSelectDate }: CalendarProps) {
  const [dateSelected, setDateSelected] = useState<Moment>(moment());

  const [monthEndYearSelected, setMonthEndYearSelected] = useState<Moment>(
    moment()
  );

  const dateNow = useMemo(() => moment(), []);

  return (
    <div className={styles.container}>
      <div className={styles["header-page"]}>
        <button
          onClick={() => setMonthEndYearSelected(monthEndYearSelected.year(-1))}
        >
          <img className={styles.arrow} src={arrowLeft} alt="arrowLeft" />
        </button>
        {dateNow.format("YYYY")}
        {/* <IconButton
          size="small"
          onClick={() => setCurrentYear(currentYear + 1)}
        >
          <KeyboardArrowRightIcon style={{ color: "#143296", fontSize: 40 }} />
        </IconButton> */}
      </div>
      <div className={styles["content"]}>
        <MonthCard
          monthEndYearSelected={monthEndYearSelected}
          setMonthEndYearSelected={setMonthEndYearSelected}
          dateSelected={dateSelected}
          setDateSelected={setDateSelected}
          onClick={() => onSelectDate()}
        />
      </div>
    </div>
  );
}
