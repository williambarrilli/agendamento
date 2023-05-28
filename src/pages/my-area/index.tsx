import { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/button";
import ListComponents from "../../components/listComponents";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyArea() {
  const listTest = [
    {
      name: "William",
      phone: "5554981559983",
      date: "27/08/2023",
      hour: "16:00",
    },
    {
      name: "Mariana",
      phone: "5466767343",
      date: "27/08/2023",
      hour: "14:00",
    },
    {
      name: "Juliana",
      phone: "5466767343",
      date: "27/08/2023",
      hour: "10:00",
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Minhas solicitações</h2>

      <div className={styles.content}>
        <Calendar
          onClickDay={(value) => console.log(value.toLocaleDateString())}
          value={new Date()}
          minDate={new Date()}
        />
        <ListComponents listItems={listTest} />
      </div>
    </div>
  );
}
