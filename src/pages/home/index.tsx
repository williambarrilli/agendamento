import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import bannerImage from "../../assets/bannerImage.jpg";
import CalendarView from "../../views/calendarView";
import SelectHourView from "../../views/selectHourView";
import ButtonsView from "../../views/buttonsView";
import { EnumMenu } from "../../types/enums";

export default function Home() {
  const [modalHour, setModalHour] = useState(false);
  const [typeBody, setTypeBody] = useState<EnumMenu>(EnumMenu.INITIAL);
  const [dateSelected, setDateSelected] = useState<string>("");

  useEffect(() => {
    if (dateSelected) setModalHour(true);
    else setModalHour(false);
  }, [dateSelected]);

  const renderBody = () => {
    const types = {
      INITIAL: (
        <ButtonsView onClick={(value: EnumMenu) => setTypeBody(value)} />
      ),
      SELECTSERVICE: <></>,
      SELECTDATE: (
        <CalendarView
          setDateSelected={(value: string) => setDateSelected(value)}
          dateSelected={dateSelected}
          onBack={(value: EnumMenu) => setTypeBody(value)}
        />
      ),
      MYSERVICES: <></>,
    };
    return types[typeBody] || types[EnumMenu.INITIAL];
  };

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.banner} src={bannerImage} alt="bannerImage" />
      </div>
      <div>
        <h1 className="text"> Juliana Silva </h1>
      </div>
      {renderBody()}

      <SelectHourView
        isOpen={modalHour}
        onClose={() => setModalHour(false)}
        setDateSelected={(value: string) => setDateSelected(value)}
        dateSelected={dateSelected}
      />
    </div>
  );
}
