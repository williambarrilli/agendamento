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
      <div className={styles.content}>
        <h1 className={styles.text}>Meus Horarios</h1>
        <h3 className={styles.paragraph}>
          Selecione os horarios que deseja atender:
        </h3>
        <section className={styles.section}>
          <InputSelect
            value={selectedHour}
            placeholder="horas"
            options={hours}
            onChange={setSelectedHour}
            size="sm"
          />
          <div className={styles.sigla}>h</div>
          <InputSelect
            value={selectedMinute}
            placeholder="horas"
            options={minutes}
            onChange={setSelectedMinute}
            size="sm"
          />
          <div className={styles.sigla}>min</div>
        </section>
        <div className={styles.button}>
          <Button
            styleOption="primary"
            size="sm"
            onClick={() => handleAddNewHour()}
            text={"Adicionar Horario"}
          />
        </div>
        <h3 className={styles.paragraph}>Lista de horários atuais:</h3>
        {myHours.map((hour, index) => (
          <div key={index} className={styles.pill}>
            {hour}{" "}
            <div className={styles.button}>
              <Button
                styleOption="primary"
                size="sm"
                onClick={() => handleRemoveItem(index)}
                text={"X"}
              />
            </div>
            (remover da lista)
          </div>
        ))}

        <div className={styles.button}>
          <div className={styles.button}>
            <Button
              styleOption="secondary"
              size="sm"
              onClick={() => navigate("/minha-area")}
              text={"Cancelar alterações"}
            />
          </div>
          <div className={styles.button}>
            <Button
              styleOption="primary"
              size="sm"
              onClick={() => alert("n fiz ainda")}
              text={"Salvar alterações"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
