import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ListComponents from "../../components/listComponents";
import "react-calendar/dist/Calendar.css";
import { getSolicitationList } from "../../controllers/firestore";
import Input from "../../components/input";
import { Reserved } from "../../types/reserved";
import moment from "moment";

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

  // useEffect(() => {
  //   if (!!dateFilter) {
  //     const date = moment(dateFilter);
  //     list.map((item: Reserved) => {
  //       console.log(moment(item.date).format("DD/MM/YYYY"));
  //       console.log(date.format("DD/MM/YYYY"));
  //     });
  //     // setList(list.filter((item: Reserved) => item.date === date));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dateFilter]);

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.text}>Minhas solicitações</h2>
        <div className={styles.content}>
          {/* <Input
            onChange={(value: string) => setDateFilter(value)}
            value={dateFilter}
            type="date"
          /> */}

          <ListComponents listItems={list} />
        </div>
      </div>
    </div>
  );
}
