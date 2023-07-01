import { useState } from "react";

import Button from "../../components/button";

import { hours, minutes } from "../../utils/constants";

import styles from "./styles.module.scss";
import InputSelect from "components/inputSelect";
import { useNavigate } from "react-router-dom";

export default function MyHours() {
  const navigate = useNavigate();

  const [myHours, setMyHours] = useState<string[]>([]);
  const [selectedHour, setSelectedHour] = useState<string>("7");
  const [selectedMinute, setSelectedMinute] = useState<string>("00");

  const handleAddNewHour = () => {
    const updatedList = [...myHours, `${selectedHour}:${selectedMinute}`];
    setSelectedHour("7");
    setSelectedMinute("00");
    setMyHours(updatedList);
  };

  const handleRemoveItem = (index: number) => {
    const updatedList = [...myHours];
    updatedList.splice(index, 1);
    setMyHours(updatedList);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.text}>Meus Horarios</h1>
        <h3 className={styles.text}>
          Selecione os horarios que deseja atender
        </h3>
        <InputSelect
          value={selectedHour}
          label="h"
          placeholder="horas"
          options={hours}
          onChange={setSelectedHour}
        />
        <InputSelect
          value={selectedMinute}
          label="m"
          placeholder="horas"
          options={minutes}
          onChange={setSelectedMinute}
        />
        <div className={styles.button}>
          <Button
            styleOption="primary"
            size="md"
            onClick={() => handleAddNewHour()}
            text={"Adicionar Horario"}
          />
        </div>
        {myHours.map((hour, index) => (
          <div key={index}>
            {hour}{" "}
            <div className={styles.button}>
              <Button
                styleOption="primary"
                size="md"
                onClick={() => handleRemoveItem(index)}
                text={"X"}
              />
            </div>
            (remover da lista)
          </div>
        ))}
        Lista de horarios atuais
        <div className={styles.button}>
          <Button
            styleOption="primary"
            size="md"
            onClick={() => navigate("/minha-area")}
            text={"Cancelar alterações"}
          />
        </div>
        <div className={styles.button}>
          <Button
            styleOption="primary"
            size="md"
            onClick={() => alert("n fiz ainda")}
            text={"Salvar alterações"}
          />
        </div>
      </div>
    </div>
  );
}
