import "./styles.button.scss";

interface ButtonProps {
  text: string;
  onclick: () => void;
  styleOption?: "primary" | "secondary";
}

export default function Button({
  text,
  onclick,
  styleOption = "primary",
}: ButtonProps) {
  const buttonClassName = `button ${styleOption}`;
  return (
    <div>
      <button className={buttonClassName} onClick={() => onclick()}>
        {text}
      </button>
    </div>
  );
}
