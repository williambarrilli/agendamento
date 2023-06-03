import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ListComponents from "../../components/listComponents";
import "react-calendar/dist/Calendar.css";
import { getSolicitationList } from "../../controllers/firestore";
import { Reserved } from "../../types/reserved";
import moment from "moment";
import Calendar from "../../components/calendar";

export default function MyArea() {
  const [list, setList] = useState([]);
  const [dateFilter, setDateFilter] = useState("");

  const fetchData = async () => {
    try {
      const solicitationList = await getSolicitationList(
        "MLJ0k39Q9ELsH78X3lHW",
        dateFilter
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

  const onFilter = () => {
    if (!!dateFilter) {
      setList(list.filter((item: Reserved) => item.date === dateFilter));
    }
  };

  const onClearFilter = () => {
    fetchData();
    setDateFilter("");
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.text}>Minhas solicitações</h2>
        <div className={styles.content}>
          <Calendar onSelectDate={() => console.log("first")} />
        </div>
      </div>
    </div>
  );
}
