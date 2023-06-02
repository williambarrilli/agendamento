import { useState } from "react";
import moment, { Moment } from "moment";
import MonthCard from "./monthCard";

import styles from "./styles.module.scss";

export default function Calendar() {
  const [currentYear, setCurrentYear] = useState<number>(
    Number(moment().format("YYYY"))
  );
  const [dateSelected, setDateSelected] = useState<Moment>(moment());

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  moment.updateLocale("pt", {
    months: [
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
    ],
  });
  return (
    <div className={styles.container}>
      <div className={styles["header-page"]}>
        {/* <IconButton
          size="small"
          onClick={() => setCurrentYear(currentYear - 1)}
        >
          <KeyboardArrowLeftIcon style={{ color: "#143296", fontSize: 40 }} />
        </IconButton> */}
        {currentYear}
        {/* <IconButton
          size="small"
          onClick={() => setCurrentYear(currentYear + 1)}
        >
          <KeyboardArrowRightIcon style={{ color: "#143296", fontSize: 40 }} />
        </IconButton> */}
      </div>
      <div className={styles["content"]}>
        {month.map((value) => (
          <MonthCard
            key={value}
            month={value}
            currentYear={currentYear}
            dateSelected={dateSelected}
            setDateSelected={setDateSelected}
          />
        ))}
      </div>
    </div>
  );
}
