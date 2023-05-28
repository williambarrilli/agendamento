// recebe parametro label =
// text= acima do input,
// value= valor do input
//onChange = função para quando for digitado
// placeholder
import styles from "./styles.module.scss";

interface InputProps {
  type: any;
  value: string;
  placeholder: string;
  onChange: Function;
  label: string;
}
export default function Input({
  type,
  value,
  placeholder,
  onChange,
  label,
}: InputProps): JSX.Element {
  return (
    <div>
      <h1 className={styles.text}>{label}</h1>
      <input
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
