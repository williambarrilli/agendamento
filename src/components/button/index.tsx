import "./App.css";

interface ButtonProps {
  text: string;
  onclick: () => void;
  hierarchy?:
    | "primary"
    | "secondary-color"
    | "secondary-gray"
    | "secondary-blue";
}

export default function Button({
  text,
  onclick,
  hierarchy = "primary",
}: ButtonProps) {
  return (
    <div className="App">
      <button onClick={() => onclick()}>{text}</button>
    </div>
  );
}
