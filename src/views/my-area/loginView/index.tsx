import { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/button";

export default function MyArea() {
  const [code, setCode] = useState("");

  const validCodes = ["12345"];

  const validCode = () => {
    if (!!validCodes.includes(code)) return true;
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
