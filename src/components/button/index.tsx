import "./styles.button.scss";

interface ButtonProps {
  text: string;
  onclick: () => void;
  styleOption?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Button({
  text,
  onclick,
  styleOption = "primary",
  size = "md",
}: ButtonProps) {
  return (
    <div>
      <button
        className={`button ${styleOption} ${size}`}
        onClick={() => onclick()}
      >
        {text}
      </button>
    </div>
  );
}
