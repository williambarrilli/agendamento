import "./styles.button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  styleOption?: "primary" | "secondary" | "alternative";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Button({
  text,
  onClick,
  styleOption = "primary",
  size = "md",
  ...rest
}: ButtonProps) {
  return (
    <div>
      <button
        className={`button ${styleOption} ${size}`}
        onClick={() => onClick()}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
}
