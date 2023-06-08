import Input from "../../../components/input";
import Button from "../../../components/button";
import styles from "./styles.module.scss";
import { EnumMenu } from "../../../types/enums";
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
              onclick={() => onConfirm(EnumMenu.SELECTDATE)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
