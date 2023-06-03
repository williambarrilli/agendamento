import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import "react-calendar/dist/Calendar.css";
import { getSolicitationList } from "../../controllers/firestore";
import { Reserved } from "../../types/reserved";
import moment, { Moment } from "moment";
import Calendar from "../../components/calendar";

export default function MyArea() {
  const [list, setList] = useState([]);
  const [dateSelected, setDateSelected] = useState(moment());

  const fetchData = async () => {
    try {
      const solicitationList = await getSolicitationList(
        "MLJ0k39Q9ELsH78X3lHW",
        dateSelected.format("DD/MM/YYYY")
      );
      setList(solicitationList);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.text}>Minhas solicitações</h2>
        <div className={styles.content}>
          <Calendar onSelectDate={(value: Moment) => setDateSelected(value)} />
        </div>
      </div>
    </div>
  );
}
