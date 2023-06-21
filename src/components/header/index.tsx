import React from "react";
import styles from "./styles.module.scss";

interface HeaderProps {
  logoImage: any;
}

const Header = ({ logoImage }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={logoImage} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
