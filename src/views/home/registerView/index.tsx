import Input from "../../../components/input";
import Button from "../../../components/button";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import { EnumMenu } from "../../../types/enums";

export interface ButtonViewProps {
  onClick: (value: EnumMenu) => void;
}
export default function RegisterView() {
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");
  const handleNomeChange = (value: any) => {
    setNome(value);
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
            value={nome}
            placeholder="Digite seu nome"
            label="Nome:"
            onChange={handleNomeChange}
          />

          <Input
            type="text"
            value={phone}
            placeholder="(**)*****-****"
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
