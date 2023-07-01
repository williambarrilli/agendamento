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
import Loading from "../../components/loading";

export default function Login() {
  initializeApp(firebaseConfig);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const auth = getAuth();
  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };
  const handleLogin = async () => {
    // TODO refatorar para hook
    setLoading(true);
    const user = await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => user)
      .catch((error) => {
        console.log(error);
        setError("Seu email ou senha estão incorretos!");
      });

    if (user?.email) {
      await getShopByEmail(user?.email);
      setSessionStorage("user", user);
      navigate("/minha-area");
    }
    setLoading(false);
  };
  if (loading) return <Loading />;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.modalContent}>
          <Input
            type="text"
            value={email}
            placeholder="Digite seu email"
            label="Email"
            onChange={handleChangeEmail}
          />
          <Input
            type="password"
            value={password}
            placeholder="Digite sua senha"
            label="Senha"
            onChange={handleChangePassword}
          />
          {error && <div className={styles.error}>{error}</div>}
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
