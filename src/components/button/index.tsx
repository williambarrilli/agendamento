import "./styles.css";

interface ButtonProps {
  text: string;
  onclick: () => void;
}

export default function Button({ text, onclick }: ButtonProps) {
  return (
    <div>
      <button className="button" onClick={() => onclick()}>
        {text}
      </button>
    </div>
  );
}
