import { useMemo, useState } from "react";
import moment, { Moment } from "moment";
import MonthCard from "./monthCard";
import arrowRight from "../../assets/icons/arrowRight.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import styles from "./styles.module.scss";
import { Reserved } from "../../types/reserved";
import { EnumStatus } from "../../types/enums";

export interface CalendarProps {
  onSelectDate: (value: Moment) => void;
  listReserved?: Reserved[];
}

export default function Calendar({
  onSelectDate,
  listReserved = [],
}: CalendarProps) {
  const [dateSelected, setDateSelected] = useState<Moment>(moment());
  const [monthEndYearSelected, setMonthEndYearSelected] = useState<Moment>(
    moment()
  );

  const jobsForDays: Reserved[] = useMemo(
    () =>
      listReserved.filter(
        (reserved) =>
          monthEndYearSelected.isSame(
            moment(reserved.date, "DD/MM/YYYY"),
            "month"
          ) && reserved.status === EnumStatus.APROVED
      ) || [],
    [monthEndYearSelected, listReserved]
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
          jobsForDays={jobsForDays}
        />
      </div>
    </div>
  );
}
