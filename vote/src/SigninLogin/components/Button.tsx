import { button } from "../styles/button.css";

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className={button}>
      {text}
    </button>
  );
}
