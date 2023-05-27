import React, { useState } from "react";
import "./styles.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarView() {
  const [value, setValue] = useState<string>("");
  console.log(value);
  return (
    <div className="container">
      <header>
        <h4>Escolha uma data</h4>
      </header>
      <div className="content">
        <Calendar
          onClickDay={(value) => setValue(value?.toLocaleDateString())}
          value={value}
          minDate={new Date()}
        />
      </div>
    </div>
  );
}
