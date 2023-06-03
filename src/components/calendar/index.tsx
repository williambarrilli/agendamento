import { useState } from "react";
import moment, { Moment } from "moment";
import MonthCard from "./monthCard";
import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import styles from "./styles.module.scss";

export interface CalendarProps {
  onSelectDate: (value: Moment) => void;
}

export default function Calendar({ onSelectDate }: CalendarProps) {
  const [dateSelected, setDateSelected] = useState<Moment>(moment());

  const [monthEndYearSelected, setMonthEndYearSelected] = useState<Moment>(
    moment()
  );

  return (
    <div className={styles.container}>
      <div className={styles["header-page"]}>
        <span className={styles["arrow-box"]}>
          <img
            onClick={() =>
              setMonthEndYearSelected(
                moment(monthEndYearSelected).subtract(1, "year")
              )
            }
            className={styles["arrow-img"]}
            src={arrowLeft}
            alt="arrowLeft"
          />
        </span>
        <span>{monthEndYearSelected.format("YYYY")}</span>
        <span className={styles["arrow-box"]}>
          <img
            onClick={() =>
              setMonthEndYearSelected(
                moment(monthEndYearSelected).add(1, "year")
              )
            }
            className={styles["arrow-img"]}
            src={arrowRight}
            alt="arrowRight"
          />
        </span>
      </div>
      <div className={styles["content"]}>
        <MonthCard
          monthEndYearSelected={monthEndYearSelected}
          setMonthEndYearSelected={setMonthEndYearSelected}
          dateSelected={dateSelected}
          setDateSelected={setDateSelected}
          onClick={(value: Moment) => onSelectDate(value)}
        />
      </div>
    </div>
  );
}
