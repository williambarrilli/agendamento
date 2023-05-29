import Input from "../../../components/input";
import Button from "../../../components/button";
import styles from "./styles.module.scss";

export default function RegisterView(
  name: string,
  phone: string,
  setName: (value: string) => void,
  setPhone: (value: string) => void
) {
  const handleNomeChange = (value: any) => {
    setName(value);
  };
  const handlePhoneChange = (value: any) => {
    setPhone(value);
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
            placeholder="(*)*-*"
            label="Telefone:"
            onChange={handlePhoneChange}
          />

          <Button
            styleOption="secondary"
            text="Continuar"
            size="md"
            onclick={() => alert} //onClick(EnumMenu.SELECTDATE) Eu queria por assim esse caralho p ir pra agenda mas aqui não da certo igual da no buttonsView
          />
        </div>
      </div>
    </div>
  );
}
