import { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../init-firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setSessionStorage } from "../../utils/sessionStorage";
import Input from "../../components/input";
import { getShopByEmail } from "../../controllers/firestore";

export default function Login() {
  initializeApp(firebaseConfig);
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const handleChangeLogin = (value: string) => {
    setLogin(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };
  const handleLogin = async () => {
    // TODO refatorar para hook
    const user = await signInWithEmailAndPassword(auth, login, password)
      .then(({ user }) => user)
      .catch((error) => {
        console.log(error);
        alert("Seu email ou senha estão incorretos");
      });
    if (user?.email) {
      await getShopByEmail(user?.email);
      setSessionStorage("user", user);
      navigate("/minha-area");
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.modalContent}>
          <Input
            type="text"
            value={login}
            placeholder="Digite seu login"
            label="Email:"
            onChange={handleChangeLogin}
          />
          <Input
            type="password"
            value={password}
            placeholder="Digite sua senha"
            label="Senha:"
            onChange={handleChangePassword}
          />
          <div className={styles.button}>
            <Button
              styleOption="primary"
              onClick={() => handleLogin()}
              text="Entrar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
