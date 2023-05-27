import React, { useState } from "react";
import "./styles.css";
import bannerImage from "../../assets/bannerImage.jpg";
import Button from "../../components/button";
import CalendarView from "../../views/calendarView";
import SelectHourView from "../../views/selectHourView";

export default function Home() {
  const [modalHour, setModalHour] = useState(true);
  const calendar = true;
  return (
    <div className="container">
      <div>
        <img className="banner" src={bannerImage} alt="bannerImage" />
      </div>
      <div>
        <h1 className="text"> Juliana Silva </h1>
      </div>
      <div className="content-buttons">
        <Button text="Agende" onclick={() => alert("batata")} />
      </div>
      {calendar && <CalendarView />}
      <SelectHourView isOpen={modalHour} />
    </div>
  );
}
