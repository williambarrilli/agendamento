import React, { useState } from "react";
import "./styles.css";
import bannerImage from "../../assets/bannerImage.jpg";
import CalendarView from "../../views/calendarView";
import SelectHourView from "../../views/selectHourView";
import ButtonsView from "../../views/buttonsView";

export default function Home() {
  const [modalHour, setModalHour] = useState(false);
  const calendar = false;
  return (
    <div className="container">
      <div>
        <img className="banner" src={bannerImage} alt="bannerImage" />
      </div>
      <div>
        <h1 className="text"> Juliana Silva </h1>
      </div>
      <ButtonsView />

      {calendar && <CalendarView />}

      <SelectHourView isOpen={modalHour} onClose={() => setModalHour(false)} />
    </div>
  );
}
