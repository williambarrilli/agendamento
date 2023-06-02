import moment from "moment";
import { Moment } from "moment";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import objStr from "obj-str";

export interface DayCardProps {
  day: Moment;
  month: string;
  year: number;
  dateSelected: Moment;
  setDateSelected: (value: Moment) => void;
}
export default function DayCard({
  day,
  month,
  year,
  dateSelected,
  setDateSelected,
}: DayCardProps) {
  const [state, setState] = useState("");

  useEffect(() => {
    const currentMonth = new Date(month + ",01," + year);

    if (day.get("M") !== currentMonth.getMonth()) {
      setState("nonPertenceMonth");
      return;
    }
    if (moment(dateSelected).isSame(day)) {
      setState("selected");
    } else {
      setState("");
    }
  }, [day, month, year, dateSelected]);

  const handleClickDate = () => {
    if (state !== "nonPertenceMonth")
      if (moment(dateSelected).isSame(day)) {
        setState("");
      } else {
        setState("selected");
        setDateSelected(day);
      }
  };

  return (
    <button
      className={`${objStr({
        [styles["day"]]: true,
        [styles[state]]: true,
      })}`}
      onClick={() => handleClickDate()}
    >
      {day.format("DD").toString()}
    </button>
  );
}
