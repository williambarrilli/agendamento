import "./styles.button.scss";

interface ButtonProps {
  text: string;
  onclick: () => void;
  styleOption?: "primary" | "secondary" | "alternative";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Button({
  text,
  onclick,
  styleOption = "primary",
  size = "md",
  ...rest
}: ButtonProps) {
  return (
    <div>
      <button
        className={`button ${styleOption} ${size}`}
        onClick={() => onclick()}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
}
