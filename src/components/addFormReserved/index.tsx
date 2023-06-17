import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Input from "../input";
import Button from "../button";
import { EnumMenu } from "../../types/enums";

interface ReservedProps {
  name: string;
  phone: string;
  date: string;
  hour: string;
  alterarName: (value: string) => void;
  alterarPhone: (value: string) => void;
  alterarDate: (value: string) => void;
  alterarHour: (value: string) => void;
  onConfirm: (value: EnumMenu) => void;
}

export default function ReservedComponent({
  name,
  phone,
  date,
  hour,
  alterarName,
  alterarPhone,
  alterarDate,
  alterarHour,
  onConfirm,
}: ReservedProps) {
  const handleNomeChange = (value: string) => {
    alterarName(value);
  };
  const handlePhoneChange = (value: string) => {
    alterarPhone(value);
  };
  const handleDateChange = (value: string) => {
    alterarDate(value);
  };
  const handleHourChange = (value: string) => {
    alterarHour(value);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.text}> Adicionar Reserva </h2>
      <div className={styles.content}>
        <div>
          <Input
            type="date"
            value={date}
            placeholder="Selecione uma data"
            label="Data:"
            onChange={handleDateChange}
          />
          <Input
            type="text"
            value={hour}
            placeholder="Selecione uma horario"
            label="Horário:"
            onChange={handleHourChange}
          />
          <Input
            type="text"
            value={name}
            placeholder="Digite o nome"
            label="Nome:"
            onChange={handleNomeChange}
          />

          <Input
            type="tel"
            value={phone}
            placeholder="(**)****-****"
            label="Telefone:"
            onChange={handlePhoneChange}
          />
          <div className={styles["box-button"]}>
            <Button
              styleOption="primary"
              text="Confirmar"
              size="md"
              onclick={() => onConfirm(EnumMenu.SELECTDATE)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//tirar o botao q ta no modal e por em baixoo do calendario
