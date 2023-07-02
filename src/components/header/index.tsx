import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "components/button";

interface HeaderProps {
  logoImage: any;
}

const Header = ({ logoImage }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div>
        <img
          className={styles.logo}
          src={logoImage}
          alt="Logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className={styles.button}>
        <Button
          styleOption="primary"
          onClick={() => navigate("/login")}
          text="Minha Area"
        />
      </div>
    </header>
  );
};

export default Header;
