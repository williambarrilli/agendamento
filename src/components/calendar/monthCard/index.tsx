import moment, { Moment } from "moment";
import { useEffect, useState, useMemo } from "react";
import calendarBuild from "../calendarBuild";
import DayCard from "../dayCard";

export interface MonthCardProps {
  month: string;
  currentYear: number;
  dateSelected: number[];
  setDateSelected: (value: number[]) => void;
}

export default function MonthCard({
  month,
  currentYear,
  dateSelected,
  setDateSelected,
}: MonthCardProps) {
  const [monthAndYear, setMonthAndYear] = useState(moment());
  const [calendar, setCalendar] = useState<Moment[][]>([]);
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  useEffect(() => {
    setMonthAndYear(moment().locale("pt").month(month).year(currentYear));
    setCalendar(calendarBuild(monthAndYear));
  }, [month, currentYear, monthAndYear]);

  return (
    <div id="month-card">
      <div className="header">{monthAndYear?.format("MMMM")}</div>
      <div className="week-days">
        {weekDays.map((value, index) => (
          <div className="week-day" key={index}>
            {value}
          </div>
        ))}
      </div>
      {calendar?.map((week, index) => (
        <div className="week" key={index}>
          {week &&
            week?.map((day, index) => (
              <DayCard
                key={index}
                day={day}
                month={month}
                year={currentYear}
                dateSelected={dateSelected}
                setDateSelected={setDateSelected}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
