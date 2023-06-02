import moment from "moment";
import { Moment } from "moment";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export interface DayCardProps {
  day: Moment;
  month: string;
  year: number;
  dateSelected: number[];
  setDateSelected: (value: number[]) => void;
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

    if (dateSelected.find((value: any) => value.getTime() === moment(day))) {
      setState("selected");
    } else {
      setState("");
    }
  }, [day, month, year, dateSelected]);

  const handleClickDate = () => {
    if (state !== "nonPertenceMonth")
      if (dateSelected.find((value: any) => value.getTime() === moment(day))) {
        setState("");
        setDateSelected(
          dateSelected.filter((value: any) => value.getTime() !== moment(day))
        );
      } else {
        setState("selected");
        setDateSelected([...dateSelected, day.get("day")]);
      }
  };

  return (
    <button className={styles.days} onClick={handleClickDate}>
      {day.format("DD").toString()}
    </button>
  );
}
