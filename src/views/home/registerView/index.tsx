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
  const handleNomeChange = (value: any) => {
    alterarName(value);
  };
  const handlePhoneChange = (value: any) => {
    alterarPhone(value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.text}> Registro do cliente </h1>
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
            type="text"
            value={phone}
            placeholder="()-*"
            label="Telefone:"
            onChange={handlePhoneChange}
          />

          <Button
            styleOption="secondary"
            text="Continuar"
            size="md"
            onclick={() => onConfirm(EnumMenu.SELECTDATE)} //onClick(EnumMenu.SELECTDATE) Eu queria por assim esse caralho p ir pra agenda mas aqui não da certo igual da no buttonsView
          />
        </div>
      </div>
    </div>
  );
}
