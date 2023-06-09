import styles from "./styles.module.scss";
import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  type?: HTMLInputTypeAttribute;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  label?: string;
}
export default function Input({
  type,
  value,
  placeholder,
  onChange,
  label,
  ...rest
}: InputProps) {
  return (
    <div>
      <h1 className={styles.text}>{label}</h1>
      <input
        {...rest}
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
