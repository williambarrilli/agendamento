import moment, { Moment } from "moment";
import { useMemo } from "react";
import calendarBuild from "../calendarBuild";
import styles from "./styles.module.scss";
import objStr from "obj-str";
import arrowRight from "../../../assets/arrowRight.svg";
import arrowLeft from "../../../assets/arrowLeft.svg";
export interface MonthCardProps {
  monthEndYearSelected: Moment;
  dateSelected: Moment;
  setMonthEndYearSelected: (value: Moment) => void;
  setDateSelected: (value: Moment) => void;
  onClick: (value: Moment) => void;
}

export default function MonthCard({
  monthEndYearSelected,
  dateSelected,
  setMonthEndYearSelected,
  setDateSelected,
  onClick,
}: MonthCardProps) {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  const getMonth = (month: number) => {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return months[month];
  };
  const calendar: Moment[][] = useMemo(
    () =>
      calendarBuild(
        moment()
          .locale("pt")
          .month(monthEndYearSelected.month())
          .year(monthEndYearSelected.year())
      ) || [],
    [monthEndYearSelected]
  );

  const handleClick = (day: Moment) => {
    setDateSelected(day);
    onClick(day);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
        <span className={styles.tittle}>
          {getMonth(Number(monthEndYearSelected?.format("M")))}
        </span>
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
      <div className={styles["week-days"]}>
        {weekDays.map((value, index) => (
          <div className={styles["week-day"]} key={index}>
            {value}
          </div>
        ))}
      </div>
      {calendar?.map((week, index) => (
        <div className={styles.week} key={index}>
          {week.map((day, index) => (
            <span
              key={index}
              className={`${objStr({
                [styles["day"]]: true,
                [styles["state"]]: true,
                [styles["is-selected"]]: dateSelected.isSame(day),
                [styles["is-not-current-month"]]: !monthEndYearSelected.isSame(
                  day,
                  "month"
                ),
              })}`}
              onClick={() => handleClick(day)}
            >
              <>{day.format("DD").toString()}</>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
