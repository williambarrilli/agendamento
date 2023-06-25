import styles from "./styles.module.scss";
import Input from "../input";
import Button from "../button";
import { Reserved } from "../../types/reserved";
import { useState } from "react";
import { EnumStatus } from "../../types/enums";
import InputSelect from "../inputSelect";
import { horarios } from "../../utils/constants";
import { sendSolicitationReserved } from "../../controllers/firestore";
import moment from "moment";

interface ReservedProps {
  shopId?: string;
  onClose: () => void;
}
export default function ReservedComponent({ shopId, onClose }: ReservedProps) {
  const [newReserved, setNewReserved] = useState<Reserved>({
    name: "",
    phone: "",
    date: "",
    hour: "",
    status: EnumStatus.APROVED,
  });

  const handleChange = (name: string, value: string | number | boolean) => {
    setNewReserved((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitReserved = () => {
    sendSolicitationReserved(
      shopId ? shopId : "MLJ0k39Q9ELsH78X3lHW",
      newReserved
    );
    alert("Reserva adicionada");
    onClose();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.text}> Adicionar Reserva </h2>
      <div className={styles.content}>
        <div>
          <Input
            type="date"
            value={newReserved.date}
            placeholder="Selecione uma data"
            label="Data:"
            onChange={(e) =>
              handleChange("date", moment(e, "YYYY/MM/DD").format("DD/MM/YYYY"))
            }
          />

          <InputSelect
            options={horarios}
            value={newReserved.hour}
            placeholder="Selecione uma horario"
            label="Horário:"
            onChange={(e) => handleChange("hour", e)}
          />
          <Input
            type="text"
            value={newReserved.name}
            placeholder="Digite o nome"
            label="Nome:"
            onChange={(e) => handleChange("name", e)}
          />

          <Input
            type="tel"
            value={newReserved.phone}
            placeholder="(**)****-****"
            label="Telefone:"
            onChange={(e) => handleChange("phone", e)}
          />
          <div className={styles["box-button"]}>
            <Button
              styleOption="secondary"
              text="Voltar"
              size="md"
              onclick={() => onClose()}
            />
            <Button
              styleOption="primary"
              text="Confirmar"
              size="md"
              onclick={() => submitReserved()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
