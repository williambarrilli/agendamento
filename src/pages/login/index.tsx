import { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const validCodes = ["123"];

  const validCode = () => {
    if (!!validCodes.includes(code)) navigate("/minha-area");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <label>Digite seu codigo de acesso:</label>
        <div className={styles["input-box"]}>
          <input
            type="password"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
        </div>
        <Button onclick={() => validCode()} text="Login" />
      </div>
    </div>
  );
}
