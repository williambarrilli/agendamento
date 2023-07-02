import Input from "../../../components/input";
import Button from "../../../components/button";
import styles from "./styles.module.scss";
import { EnumMenu } from "../../../types/enums";
import { useMemo } from "react";
export interface RegisterViewProps {
  name: string;
  phone: string;
  alterarName: (value: string) => void;
  alterarPhone: (value: string) => void;
  onConfirm: (value: EnumMenu) => void;
}

export default function RegisterView({
  name,
  phone,
  alterarName,
  alterarPhone,
  onConfirm,
}: RegisterViewProps) {
  const handleNomeChange = (value: string) => {
    alterarName(value);
  };
  const handlePhoneChange = (value: string) => {
    alterarPhone(value);
  };

  const isError = useMemo(() => !name || !phone, [name, phone]);

  return (
    <div className={styles.container}>
      <h2 className={styles.text}> Informações do cliente </h2>
      <div className={styles.content}>
        <div>
          <Input
            type="text"
            value={name}
            placeholder="Digite seu nome"
            label="Nome:"
            onChange={handleNomeChange}
          />

          <Input
            type="number"
            value={phone}
            placeholder="(**)****-****"
            label="Telefone:"
            onChange={handlePhoneChange}
          />
          <div className={styles["box-button"]}>
            <Button
              styleOption="primary"
              text="Continuar"
              size="md"
              onClick={() => onConfirm(EnumMenu.SELECTDATE)}
              disabled={isError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
