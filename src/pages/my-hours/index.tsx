import { useEffect, useState } from "react";

import Button from "../../components/button";

import { hours, minutes } from "../../utils/constants";

import styles from "./styles.module.scss";
import InputSelect from "components/inputSelect";
import { useNavigate } from "react-router-dom";
import { updateHourShop } from "controllers/firestore";
import { getSessionStorage, setSessionStorage } from "utils/sessionStorage";
import { Shop } from "types/shop";

export default function MyHours() {
  const navigate = useNavigate();
  const session: Shop = getSessionStorage("shopData");

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

  const handleSubmit = () => {
    const shopId = session?.id as string;
    updateHourShop(shopId, myHours);
    setSessionStorage("shopData", { ...session, hoursShopOpen: myHours });
  };

  useEffect(() => {
    if (session?.hoursShopOpen?.length) setMyHours(session.hoursShopOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.text}>Meus Horarios</h1>
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
          <div className={styles.siglaButton}>
            <Button
              styleOption="primary"
              size="sm"
              onClick={() => handleAddNewHour()}
              text={"Adicionar"}
            />
          </div>
        </section>

        <h3 className={styles.paragraph}>Horários que deseja atender:</h3>
        <div className={styles.pill}>
          {myHours.map((hour, index) => (
            <div key={index}>
              {" "}
              <div className={styles.button}>
                <Button
                  styleOption="primary"
                  size="sm"
                  onClick={() => handleRemoveItem(index)}
                  text={hour + "  X"}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <div className={styles.button}>
            <Button
              styleOption="secondary"
              size="md"
              onClick={() => navigate("/minha-area")}
              text={"Cancelar"}
            />
          </div>
          <div className={styles.button}>
            <Button
              styleOption="primary"
              size="md"
              onClick={() => handleSubmit()}
              text={"Salvar"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
