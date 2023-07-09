import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../init-firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setSessionStorage } from "../../utils/sessionStorage";
import Input from "../../components/input";
import Loading from "../../components/loading";
import { logLoginUserAnalytics, logPageAnalytics } from "utils/analitycs";

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

  useEffect(() => {
    logPageAnalytics("Login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      logLoginUserAnalytics();
      setSessionStorage("user", user);
      navigate("/minha-area");
    }
    setLoading(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user && user.email) {
        setSessionStorage("user", user);
        navigate("/minha-area");
      }
    });
  }, [auth, navigate]);

  if (loading) return <Loading />;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.modalContent}>
          <Input
            type="email"
            value={email}
            placeholder="Digite seu email"
            label="Email"
            onChange={handleChangeEmail}
            size="lg"
          />
          <Input
            type="password"
            value={password}
            placeholder="Digite sua senha"
            label="Senha"
            size="lg"
            onChange={handleChangePassword}
          />
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.button}>
            <Button
              type="submit"
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
