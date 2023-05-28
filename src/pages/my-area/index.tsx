import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ListComponents from "../../components/listComponents";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getSolicitationList } from "../../controllers/firestore";

export default function MyArea() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const solicitationList = await getSolicitationList(
          "MLJ0k39Q9ELsH78X3lHW"
        );
        setList(solicitationList);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.text}>Minhas solicitações</h2>
        <div className={styles.content}>
          <Calendar
            onClickDay={(value) => console.log(value.toLocaleDateString())}
            value={new Date()}
            minDate={new Date()}
          />
          <ListComponents listItems={list} />
        </div>
      </div>
    </div>
  );
}
